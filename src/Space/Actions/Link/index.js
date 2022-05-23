import Space from "../../Space";
async function Link(that) {
  let URLParameters = Space.Helpers.ReadRequest.URLParameters(that.request)
  let url=URLParameters.url
  // 302
  return Response.redirect(url, 302);
}
export default Link;
