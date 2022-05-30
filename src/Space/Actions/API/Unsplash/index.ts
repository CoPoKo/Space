import Router from "../../../Helpers/Router"
import Space from "../../../Space"

async function Unsplash(ctx: Router) {
  const keywords = ctx.getParam("keywords")
  const ans = await Space.API.Unsplash(keywords)

  return fetch(ans)
}
export default Unsplash;
