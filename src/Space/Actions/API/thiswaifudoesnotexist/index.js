import Space from "../../../Space"

async function thiswaifudoesnotexist(ctx) {
  let id = ctx.getParam("id");
  let ans = await Space.API.thiswaifudoesnotexist(id)
  return fetch(ans)
}
export default thiswaifudoesnotexist;
