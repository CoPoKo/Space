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
async function securityCheckAnalytics(event) {
  // Workers KV 免费包含
  // 1 GB - 键值存储空间
  // 100,000 - 每日键值读取*
  // 1,000 - 每日键值写入*
  // 1,000 - 每日键值删除
  // 1,000 - 每日键值列表
  // 支持最大 512 Bytes 的键
  // 支持最大 25 MB 的值
  const kv_read = await Space.API.CF.getWorkersKVRequestAnalytics("read").then(e => e.json()).then(e => e.result)
  await setUnderAttack(kv_read?.totals?.requests, 30000, 35000)
  const kv_write = await Space.API.CF.getWorkersKVRequestAnalytics("write").then(e => e.json()).then(e => e.result)
  await setUnderAttack(kv_write?.totals?.requests, 250, 350)
  // Workers 每日 100,000 Request
  const workers = await Space.API.CF.getWorkersRequestAnalytics().then(e => e.json()).then(e => e.data).then(e => e?.viewer?.accounts[0]?.workersInvocationsAdaptive[0]?.sum?.requests)
  await setUnderAttack(workers, 35000, 40000)
}
async function setUnderAttack(a, b, c) {
  if (!a) {
    return
  }
  if (a > b) {
    await Space.API.CF.setSecurityLevel("under_attack")
  }
  if (a > c) {
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
