import Space from "../../../Space"

async function Thum(ctx: any) {
  const opt: any = {}
  opt.url = ctx.getParam("url")
  opt.width = ctx.getParam("width")
  opt.height = ctx.getParam("height")
  opt.wait = ctx.getParam("wait")

  const ans = await Space.API.Thum(opt)
  return fetch(ans)
}
export default Thum;
