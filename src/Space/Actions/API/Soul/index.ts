import Space from "../../../Space"

async function Soul(ctx: any) {
  const path = ctx.pathname
  const soul = await Space.API.Soul()
  if (path.startsWith('/soul/w')) {
    return new Response("document.write('" + soul + "')", Space.Helpers.Headers.json)
  }
  return new Response(JSON.stringify({ "soul": soul }), Space.Helpers.Headers.json)
}
export default Soul;
