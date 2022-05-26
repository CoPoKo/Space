import Space from "../../../Space"

async function thisanimedoesnotexist(ctx) {
  let creativity = ctx.getParam("creativity");
  let seed = ctx.getParam("seed");
  let ans = await Space.API.thisanimedoesnotexist(creativity,seed)
  return fetch(ans)
}
export default thisanimedoesnotexist;
