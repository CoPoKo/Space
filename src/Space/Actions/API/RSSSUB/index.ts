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
import RSSContext from "../../../../types/RSSContext";
import Router from "../../../Helpers/Router";
import Space from "../../../Space"

async function RSSSUB(ctx: Router) {
  const path = ctx.pathname;
  if (ctx.method === "GET") {
    let sub = await Space.API.KV.Get("RSSSUB").then(JSON.parse);
    if (!sub) {
      sub = []
    }
    return new Response(JSON.stringify(sub))
  } else if (ctx.method === "POST") {
    const body: any = await ctx.request.json();
    const url = body.url;
    if (path.startsWith("/space/api/RSSSUB/add")) {
      const feed = await Space.API.ParseRSS(url);
      const rss: RSSContext = {
        title: feed.title,
        url: url,
        status: true,
        errorTime: 0,
        notify: true,
        lastPost: feed.items[0]?.title,
        lastLink: feed.items[0]?.link,
        lastUpdateTime: feed.items[0]?.pubDate,
      };
      let sub = await Space.API.KV.Get("RSSSUB").then(JSON.parse);
      if (!sub) {
        sub = []
      }
      sub.push(rss);
      // 去重
      sub = sub.filter((item: { url: any; }, index: any, self: any[]) => {
        return self.findIndex(t => t.url === item.url) === index
      });
      await Space.API.KV.Put("RSSSUB", JSON.stringify(sub));
      return new Response(JSON.stringify({ success: 1, sub: sub }))
    }
    if (path.startsWith("/space/api/RSSSUB/delete")) {
      let sub = await Space.API.KV.Get("RSSSUB").then(JSON.parse);
      // 删除键为url的项
      sub = sub.filter((item: any) => item.url !== url);
      await Space.API.KV.Put("RSSSUB", JSON.stringify(sub));
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
