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

async function RSSSUB(ctx: Router): Promise<Response> {
  const path = ctx.pathname;
  if (path.startsWith("/space/api/RSSSUB/update")) {
    await Space.Helpers.RSS.update();
    return new Response(JSON.stringify({ success: 1}))
  }
  if (ctx.method === "GET") {
    const sub = await Space.Helpers.RSS.list();
    return new Response(JSON.stringify(sub))
  } else if (ctx.method === "POST") {
    const body: any = await ctx.request.json();
    const url = body.url;
    if (path.startsWith("/space/api/RSSSUB/add")) {
      const sub = await Space.Helpers.RSS.add(url);
      return new Response(JSON.stringify({ success: 1, sub: sub }))
    }
    if (path.startsWith("/space/api/RSSSUB/delete")) {
      const sub = await Space.Helpers.RSS.del(url);
      return new Response(JSON.stringify({ success: 1, sub: sub, url: url }))
    }
    if (path.startsWith("/space/api/RSSSUB/status")) {
      let sub = await Space.API.KV.Get("RSSSUB").then(JSON.parse);
      const index = sub.findIndex((item: { url: string; }) => item.url === url);
      if (index !== -1) {
        sub[index].status = !sub[index].status;
      }
      await Space.API.KV.Put("RSSSUB", JSON.stringify(sub));
      return new Response(JSON.stringify({ success: 1 }))
    }
    if (path.startsWith("/space/api/RSSSUB/notify")) {
      let sub = await Space.API.KV.Get("RSSSUB").then(JSON.parse);
      const index = sub.findIndex((item: { url: string; }) => item.url === url);
      if (index !== -1) {
        sub[index].notify = !sub[index].notify;
      }
      await Space.API.KV.Put("RSSSUB", JSON.stringify(sub));
      return new Response(JSON.stringify({ success: 1 }))
    }
  }
}
export default RSSSUB;
