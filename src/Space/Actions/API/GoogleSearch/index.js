import Space from "../../../Space"

async function GoogleSearch(ctx) {
  let URLParameters = Space.Helpers.ReadRequest.URLParameters(ctx.request)
  let s = URLParameters.s
  let ans = await Space.API.GoogleSearch(s)
  return new Response(ans, Space.Helpers.Headers.json);
}
export default GoogleSearch;
