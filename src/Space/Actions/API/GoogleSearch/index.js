import Space from "../../../Space"

async function GoogleSearch(that){
  let URLParameters = Space.Helpers.ReadRequest.URLParameters(that.request)
  let s=URLParameters.s
  let ans= await Space.API.GoogleSearch(s)
  return new Response(ans,Space.Helpers.Headers.json);
}
export default GoogleSearch;
