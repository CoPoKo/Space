import Space from "../../../Space"

async function Hitokoto(that) {
  let path = that.pathname
  let ans = await Space.API.Hitokoto()
  if (path.startsWith('/hitokoto/w')) {
    return new Response("document.write('" + ans + "')", Space.Helpers.Headers.json)
  }
  return new Response(JSON.stringify({ "Hitokoto": ans }), Space.Helpers.Headers.json)
}
export default Hitokoto;
