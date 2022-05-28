import Space from "../../Space";
function checkReferer(event) {
  let referer = event.request.headers.get('referer');
  if (referer == null) {
    return true
  }
  if (referer && (referer.includes(MY_REFERER) || referer.includes("localhost") || referer.includes("127"))) {
    return true
  }
  return false
}
async function securityCheckAnalytics() {
  const result = await Space.API.CF.getWorkersKVRequestAnalytics().then(e => e.json()).then(e => e.result)
  if (result.totals.requests > 30000) {
    await Space.API.CF.setSecurityLevel("under_attack")
  }
  if (result.totals.requests > 35000) {
    const routesresult = await Space.API.CF.getRoutes().then(e => e.json()).then(e => e.result)
    const routeid = routesresult.find(e => e.script == WORKERNAME)?.id
    if (routeid) {
      await Space.API.CF.deleteRouteById(routeid)
    }
  }
}
let Security = {
  checkReferer,
  securityCheckAnalytics,
};
export default Security;
