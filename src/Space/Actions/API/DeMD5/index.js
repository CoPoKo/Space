import Space from "../../../Space"

async function DeMD5(ctx) {
  let md5 = ctx.getParam("md5");
  let ans = await Space.API.DeMD5(md5);
  return new Response(JSON.stringify(ans), Space.Helpers.Headers.json)
}
export default DeMD5;
