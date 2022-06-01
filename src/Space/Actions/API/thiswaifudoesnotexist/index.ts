import Router from "../../../Helpers/Router";
import Space from "../../../Space"

async function thiswaifudoesnotexist(ctx: Router) {
  const id = ctx.getParam("id");
  return Space.API.thiswaifudoesnotexist(id).then(fetch)
}
export default thiswaifudoesnotexist;
