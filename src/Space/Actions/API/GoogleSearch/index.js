import Space from "../../../Space"

async function GoogleSearch(ctx) {
  const URLParameters = Space.Helpers.ReadRequest.URLParameters(ctx.request)
  const s = URLParameters.s
  const ans = await Space.API.GoogleSearch(s)
  return new Response(ans, Space.Helpers.Headers.json);
}
export default GoogleSearch;
