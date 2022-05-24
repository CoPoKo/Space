import Space from "../../../Space"

async function Soul(that) {
  let path = that.pathname
  let soul = await Space.API.Soul()
  if (path.startsWith('/api/soul/w')) {
    return new Response("document.write('" + soul + "')", Space.Helpers.Headers.json)
  }
  return new Response(JSON.stringify({ "soul": soul }), Space.Helpers.Headers.json)
}
export default Soul;
