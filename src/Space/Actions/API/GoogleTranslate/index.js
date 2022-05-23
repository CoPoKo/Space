import Space from "../../../Space"

async function GoogleTranslate(that){
  let URLParameters = Space.Helpers.ReadRequest.URLParameters(that.request)
  let s=URLParameters.s
  let conf={
    "to": "zh-cn",
    "domain": "com"
  }
  let ans= await Space.API.GoogleTranslate(s,conf)
  return new Response(ans.text,Space.Helpers.Headers.json);
}
export default GoogleTranslate;
