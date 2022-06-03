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
import Space from "../../../Space"

async function TreeHollow(ctx: Router) {
  const path = ctx.pathname
  if (ctx.method == "GET" && (path === "/tree-hollow/" || path === "/tree-hollow")) {
    return new Response(Space.Renderers.TreeHollow, Space.Helpers.Headers.html)
  }
  if (ctx.method == "GET") {
    let id = ctx.getParam('id')
    if (id == "top") {
      id = await Space.API.RKV.Get("TreeHollowID")
      if (!id) {
        const hash = await Space.API.IPFS.Put(JSON.stringify({
          text: "这里是树洞，还是个有底洞。",
          point: null
        })).then(e => e.json()).then((e: any) => e.Hash)
        await Space.API.RKV.Put("TreeHollowID", hash)
        id = await Space.API.RKV.Get("TreeHollowID")
      }
    }
    if (path.startsWith("/tree-hollow/next")) {
      return await fetch(`https://ipfs.infura.io/ipfs/${id}`)
    }
  }
  if (ctx.method == "POST") {
    const hash = await Space.API.IPFS.Put(JSON.stringify({
      text: await ctx.request.text(),
      point: await Space.API.RKV.Get("TreeHollowID")
    })).then(e => e.json()).then((e: any) => e.Hash)
    await Space.API.RKV.Put("TreeHollowID", hash)
    return new Response(JSON.stringify({ sucess: 1 }), Space.Helpers.Headers.json)
  }
}
export default TreeHollow;
