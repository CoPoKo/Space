import Space from "../../../Space"

async function ZH(ctx: any) {
  const URLParameters = Space.Helpers.ReadRequest.URLParameters(ctx.request)
  const s = URLParameters.s
  const path = ctx.pathname
  if (s) {
    if (path.startsWith('/zh/s')) {
      const ans = await Space.API.ZH.Simplized(s)
      return new Response(ans, Space.Helpers.Headers.json)
    }
    if (path.startsWith('/zh/t')) {
      const ans = await Space.API.ZH.Traditionalized(s)
      return new Response(ans, Space.Helpers.Headers.json)
    }
  }
  return new Response("null", Space.Helpers.Headers.json)
}
export default ZH;
