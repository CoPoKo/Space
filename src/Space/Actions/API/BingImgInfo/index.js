import Space from "../../../Space"

async function BingImgInfo(that) {
  let URLParameters = Space.Helpers.ReadRequest.URLParameters(that.request)
  let path = that.pathname
  let day = URLParameters.day
  let ans = await Space.API.BingImgInfo(day)

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
