import Space from "../../../Space"

async function GoogleTranslate(that){
  let URLParameters = Space.Helpers.ReadRequest.URLParameters(that.request)
  let s= URLParameters.s
  let to=URLParameters.to || "zh-cn"
  let domain=URLParameters.domain || "com"
  let conf={
    "to": to,
    "domain": domain
  }
  let ans= await Space.API.GoogleTranslate(s,conf)
  return new Response(ans.text,Space.Helpers.Headers.json);
}
export default GoogleTranslate;