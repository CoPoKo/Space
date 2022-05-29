import Space from "../../../Space"

async function GoogleTranslate(ctx: any) {
  const URLParameters: any = Space.Helpers.ReadRequest.URLParameters(ctx.request)
  const s = URLParameters.s
  const to = URLParameters.to || "zh-cn"
  const domain = URLParameters.domain || "com"
  const conf = {
    "to": to,
    "domain": domain
  }
  const ans: any = await Space.API.GoogleTranslate(s, conf)
  return new Response(ans.text, Space.Helpers.Headers.json);
}
export default GoogleTranslate;
