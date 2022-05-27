import Space from "../../../Space";

async function Get(ctx) {
  const request = ctx.request
  const path = ctx.pathname
  if (path == "/ipfs/") {
    const set = await Space.Helpers.Setting("IPFS");
    const API = set.API;
    return await fetch(API)
  }
  const url = new URL(request.url)
  url.hostname = "cloudflare-ipfs.com"
  return await fetch(url.toString(), request)
}
async function Put(ctx) {
  const s = ctx.getParam("s")
  const ans = await Space.API.IPFS.Put(s)
  const sc = await ans.text()
  return new Response(sc, Space.Helpers.Headers.js);
}

const IPFS = {
  Get,
  Put,
};
export default IPFS;
