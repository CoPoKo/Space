import Space from "../../../Space"

async function Soul(ctx) {
  let path = ctx.pathname
  let soul = await Space.API.Soul()
  if (path.startsWith('/soul/w')) {
    return new Response("document.write('" + soul + "')", Space.Helpers.Headers.json)
  }
  return new Response(JSON.stringify({ "soul": soul }), Space.Helpers.Headers.json)
}
export default Soul;
