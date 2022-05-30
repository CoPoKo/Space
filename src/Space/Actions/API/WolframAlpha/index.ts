import Router from "../../../Helpers/Router";
import Space from "../../../Space"

async function WolframAlpha(ctx: Router) {
  const s = ctx.getParam("s")
  const ans = await Space.API.WolframAlpha(s)
  return new Response(ans, Space.Helpers.Headers.json);
}
export default WolframAlpha;
