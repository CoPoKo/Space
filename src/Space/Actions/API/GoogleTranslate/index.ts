import Router from "../../../Helpers/Router"
import Space from "../../../Space"

async function GoogleTranslate(ctx: Router) {
  const s = ctx.getParam("s")
  const to = ctx.getParam("to") || "zh-cn"
  const domain = ctx.getParam("domain") || "com"
  const conf = {
    "to": to,
    "domain": domain
  }
  const ans = await Space.API.GoogleTranslate(s, conf)
  return new Response(ans.text, Space.Helpers.Headers.json);
}
export default GoogleTranslate;
