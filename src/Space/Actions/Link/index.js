async function Link(that) {
  let url=that.getParam("url")
  return Response.redirect(url, 302);
}
export default Link;
