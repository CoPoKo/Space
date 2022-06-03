/*!
 * ==========================================================================
 * "CoPoKo Space" License
 * GNU General Public License version 3.0 (GPLv3)
 * ==========================================================================
 * This file is part of "CoPoKo Space"
 *
 * "CoPoKo Space" is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * "CoPoKo Space" is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with "CoPoKo Space". If not, see <http://www.gnu.org/licenses/>.
 * ==========================================================================
*/
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
