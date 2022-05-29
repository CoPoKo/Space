async function Link(ctx: any) {
  const url = ctx.getParam("url")
  return Response.redirect(url, 302);
}
export default Link;
