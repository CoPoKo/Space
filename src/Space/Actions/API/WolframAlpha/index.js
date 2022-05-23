import Space from "../../../Space"

async function WolframAlpha(that){
  let URLParameters = Space.Helpers.ReadRequest.URLParameters(that.request)
  let s=URLParameters.s
  let ans= await Space.API.WolframAlpha(s)
  return new Response(ans,Space.Helpers.Headers.json);
}
export default WolframAlpha;
