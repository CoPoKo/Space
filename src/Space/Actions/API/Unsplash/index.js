import Space from "../../../Space"

async function Unsplash(that) {
  let URLParameters = Space.Helpers.ReadRequest.URLParameters(that.request)
  let keywords = URLParameters.keywords
  let ans = await Space.API.Unsplash(keywords)

  return fetch(ans)
}
export default Unsplash;
