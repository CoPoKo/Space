import Router from "../../../Helpers/Router"
import Space from "../../../Space"

async function Unsplash(ctx: Router) {
  const keywords = ctx.getParam("keywords")
  return Space.API.Unsplash(keywords).then(fetch)
}
export default Unsplash;
