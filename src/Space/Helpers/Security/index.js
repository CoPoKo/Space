function checkReferer(event) {
  let referer = event.request.headers.get('referer');
  if (referer==null) {
    return true
  }
  if (referer&&(referer.includes("mhuig")||referer.includes("localhost")||referer.includes("127"))) {
    return true
  }
  return false
}

let Security = {
  checkReferer:checkReferer,
};
export default Security;
