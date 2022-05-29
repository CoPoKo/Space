import Space from "../../../Space"

async function GoogleSearch(ctx: any) {
  const URLParameters: any = Space.Helpers.ReadRequest.URLParameters(ctx.request)
  const s = URLParameters.s
  const ans = await Space.API.GoogleSearch(s)
  return new Response(ans, Space.Helpers.Headers.json);
}
export default GoogleSearch;
