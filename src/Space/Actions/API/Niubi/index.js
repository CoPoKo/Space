import Space from "../../../Space"

async function Niubi(ctx) {
  const URLParameters = Space.Helpers.ReadRequest.URLParameters(ctx.request)
  const name = URLParameters.name
  const ans = await Space.API.Niubi(name)

  return new Response(JSON.stringify({ "niubi": ans }), Space.Helpers.Headers.json)
}
export default Niubi;
