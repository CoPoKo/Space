import Router from "../../../Helpers/Router";
import Space from "../../../Space"

async function thiswaifudoesnotexist(ctx: Router) {
  const id = ctx.getParam("id");
  const ans = await Space.API.thiswaifudoesnotexist(id)
  return fetch(ans)
}
export default thiswaifudoesnotexist;
