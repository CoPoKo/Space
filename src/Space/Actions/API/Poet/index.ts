import Router from "../../../Helpers/Router"
import Space from "../../../Space"

async function Poet(ctx: Router) {
  const opt: any = {}
  opt.type = ctx.getParam("type")
  opt.from = ctx.getParam("from")
  opt.with = ctx.getParam("with")
  opt.limit = ctx.getParam("limit")
  opt.start = ctx.getParam("start")
  opt.tran = ctx.getParam("tran")
  opt.author = ctx.getParam("author")

  const ans = await Space.API.Poet(opt)
  return new Response(ans, Space.Helpers.Headers.json)
}
export default Poet;
