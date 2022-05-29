import Space from "../../../Space"

async function BingImgInfo(ctx: any) {
  const URLParameters: any = Space.Helpers.ReadRequest.URLParameters(ctx.request)
  const path = ctx.pathname
  const day = URLParameters.day
  const ans = await Space.API.BingImgInfo(day)

  if (path.startsWith('/bing/info')) {
    return new Response(JSON.stringify(ans), Space.Helpers.Headers.json)
  }
  if (path.startsWith('/bing/copyright')) {
    if (path.startsWith('/bing/copyright/w')) {
      return new Response("document.write(" + JSON.stringify(ans.copyright) + ")", Space.Helpers.Headers.json)
    }
    return new Response(JSON.stringify({ "copyright": ans.copyright }), Space.Helpers.Headers.json)
  }
  return fetch(ans.url)
}
export default BingImgInfo;