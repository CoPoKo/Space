async function Link(ctx) {
  let url = ctx.getParam("url")
  return Response.redirect(url, 302);
}
export default Link;
