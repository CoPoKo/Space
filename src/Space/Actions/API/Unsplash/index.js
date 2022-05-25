import Space from "../../../Space"

async function Unsplash(ctx) {
  let URLParameters = Space.Helpers.ReadRequest.URLParameters(ctx.request)
  let keywords = URLParameters.keywords
  let ans = await Space.API.Unsplash(keywords)

  return fetch(ans)
}
export default Unsplash;
