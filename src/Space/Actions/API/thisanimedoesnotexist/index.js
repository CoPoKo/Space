import Space from "../../../Space"

async function thisanimedoesnotexist(ctx) {
  const creativity = ctx.getParam("creativity");
  const seed = ctx.getParam("seed");
  const ans = await Space.API.thisanimedoesnotexist(creativity,seed)
  return fetch(ans)
}
export default thisanimedoesnotexist;
