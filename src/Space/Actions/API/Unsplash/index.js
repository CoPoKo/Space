import Space from "../../../Space"

async function Unsplash(ctx) {
  const URLParameters = Space.Helpers.ReadRequest.URLParameters(ctx.request)
  const keywords = URLParameters.keywords
  const ans = await Space.API.Unsplash(keywords)

  return fetch(ans)
}
export default Unsplash;
