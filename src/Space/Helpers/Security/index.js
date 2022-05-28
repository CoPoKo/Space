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

let Security = {
  checkReferer,
};
export default Security;
