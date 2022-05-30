import Router from "../../../Helpers/Router";
import Space from "../../../Space"

async function GoogleSearch(ctx: Router) {
  const s = ctx.getParam("s")
  const ans = await Space.API.GoogleSearch(s)
  return new Response(JSON.stringify({ ans: ans.items }), Space.Helpers.Headers.json);
}
export default GoogleSearch;
