import Space from "../../../Space"

async function WolframAlpha(ctx) {
  let URLParameters = Space.Helpers.ReadRequest.URLParameters(ctx.request)
  let s = URLParameters.s
  let ans = await Space.API.WolframAlpha(s)
  return new Response(ans, Space.Helpers.Headers.json);
}
export default WolframAlpha;
