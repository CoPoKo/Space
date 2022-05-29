async function Link(ctx) {
  const url = ctx.getParam("url")
  return Response.redirect(url, 302);
}
export default Link;
