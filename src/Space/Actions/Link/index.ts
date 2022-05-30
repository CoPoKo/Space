import Router from "../../Helpers/Router";

async function Link(ctx: Router) {
  const url = ctx.getParam("url")
  return Response.redirect(url, 302);
}
export default Link;
