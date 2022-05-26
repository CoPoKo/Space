import Space from "../../../Space"

async function Niubi(ctx) {
  let URLParameters = Space.Helpers.ReadRequest.URLParameters(ctx.request)
  let name = URLParameters.name
  let ans = await Space.API.Niubi(name)

  return new Response(JSON.stringify({ "niubi": ans }), Space.Helpers.Headers.json)
}
export default Niubi;
