import Router from "../../../Helpers/Router"
import Space from "../../../Space"

async function Thum(ctx: Router) {
  const opt: any = {}
  opt.url = ctx.getParam("url")
  opt.width = ctx.getParam("width")
  opt.height = ctx.getParam("height")
  opt.wait = ctx.getParam("wait")

  return Space.API.Thum(opt).then(fetch)
}
export default Thum;
