import Router from "../../../Helpers/Router"
import Space from "../../../Space"

async function Niubi(ctx: Router) {
  const name = ctx.getParam("name")
  const ans = await Space.API.Niubi(name)

  return new Response(JSON.stringify({ "niubi": ans }), Space.Helpers.Headers.json)
}
export default Niubi;
