import Space from "../../../Space"

async function DecryptMd5(ctx: any) {
  const md5 = ctx.getParam("md5");
  const ans = await Space.API.DecryptMd5(md5);
  return new Response(JSON.stringify(ans), Space.Helpers.Headers.json)
}
export default DecryptMd5;
