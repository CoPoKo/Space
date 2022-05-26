import Space from "../../../Space"

async function ZH(ctx) {
  let URLParameters = Space.Helpers.ReadRequest.URLParameters(ctx.request)
  let s = URLParameters.s
  let path = ctx.pathname
  if (s) {
    if (path.startsWith('/zh/s')) {
      let ans = await Space.API.ZH.Simplized(s)
      return new Response(ans, Space.Helpers.Headers.json)
    }
    if (path.startsWith('/zh/t')) {
      let ans = await Space.API.ZH.Traditionalized(s)
      return new Response(ans, Space.Helpers.Headers.json)
    }
  }
  return new Response("null", Space.Helpers.Headers.json)
}
export default ZH;
