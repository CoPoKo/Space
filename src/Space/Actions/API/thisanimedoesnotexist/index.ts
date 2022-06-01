import Router from "../../../Helpers/Router";
import Space from "../../../Space"

async function thisanimedoesnotexist(ctx: Router) {
  const creativity = ctx.getParam("creativity");
  const seed = ctx.getParam("seed");
  return Space.API.thisanimedoesnotexist(creativity, seed).then(fetch)
}
export default thisanimedoesnotexist;
