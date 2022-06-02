import Router from "../../../Helpers/Router";
import Space from "../../../Space";

async function Get(ctx: Router) {
  const request = ctx.request
  const path = ctx.pathname
  if (path == "/ipfs/" || path == "/ipfs") {
    return new Response(Space.Renderers.ipfs, Space.Helpers.Headers.html);
  }
  const url = new URL(request.url)
  url.hostname = "ipfs.infura.io"
  return await fetch(url.toString(), request)
}
async function Put(ctx: Router) {
  const request = ctx.request
  if (ctx.method == "POST") {
    const set = await Space.Helpers.Setting("IPFS");
    const API = set.API;
    const url = new URL(request.url)
    url.hostname = new URL(API).host
    return await fetch(url.toString(), request)
  }
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
