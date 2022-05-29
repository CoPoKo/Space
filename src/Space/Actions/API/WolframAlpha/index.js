import Space from "../../../Space"

async function WolframAlpha(ctx) {
  const URLParameters = Space.Helpers.ReadRequest.URLParameters(ctx.request)
  const s = URLParameters.s
  const ans = await Space.API.WolframAlpha(s)
  return new Response(ans, Space.Helpers.Headers.json);
}
export default WolframAlpha;
