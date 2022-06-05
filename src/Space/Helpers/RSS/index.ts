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

import RSSContext from "../../../types/RSSContext";
import Space from "../../Space";
import bot from "../../TelegrafBot";
import Setting from "../Setting";

const list = async () => {
  let sub: RSSContext[] = await Space.API.KV.Get("RSSSUB").then(JSON.parse);
  if (!sub) {
    sub = []
  }
  return sub
}
const add = async (url: string) => {
  const feed = await Space.API.XML2JSON(url)
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
  let sub = await list()
  sub.push(rss);
  // 去重
  sub = sub.filter((item: { url: any; }, index: any, self: any[]) => {
    return self.findIndex(t => t.url === item.url) === index
  });
  await Space.API.KV.Put("RSSSUB", JSON.stringify(sub));
  return sub
}
const del = async (url: string) => {
  let sub = await list()
  if (url.startsWith("https://") || url.startsWith("http://")) {
    sub = sub.filter((item: any) => item.url !== url);
  } else {
    sub = sub.filter((item: any) => item.title !== url);
  }
  await Space.API.KV.Put("RSSSUB", JSON.stringify(sub));
  return sub
}
const update = async () => {
  const set = await Setting("TelegrafBot")
  const ADMIN_GROUP_ID = set.TEST_GROUP_ID
  let sub = await list()
  for await (const item of sub) {
    if (!item.status) {
      return
    }
    if (item.errorTime > 0) {
      return
    }
    const feed: any = await Space.API.XML2JSON(item.url);
    try {
      if (feed.items[0]?.pubDate != item.lastUpdateTime) {
        const rss: RSSContext = {
          title: feed.title,
          url: item.url,
          status: item.status,
          errorTime: 0,
          notify: item.notify,
          lastPost: feed.items[0]?.title,
          lastLink: feed.items[0]?.link,
          lastUpdateTime: feed.items[0]?.pubDate,
        };
        sub = sub.filter((it: any) => it.url !== item.url);
        sub.push(rss);
        await Space.API.KV.Put("RSSSUB", JSON.stringify(sub));
        if (rss.notify) {
          await bot.telegram.sendMessage(ADMIN_GROUP_ID, `<b>${rss.title}</b>\n ${rss.lastPost}\n <a href="${rss.lastLink}">Link</a>\n`, { parse_mode: "HTML" });
        }
      }
    } catch (error) {
      const rss: RSSContext = {
        title: item.title,
        url: item.url,
        status: item.status,
        errorTime: item.errorTime + 1,
        notify: item.notify,
        lastPost: item.lastPost,
        lastLink: item.lastLink,
        lastUpdateTime: item.lastUpdateTime,
      };
      sub = sub.filter((it: any) => it.url !== item.url);
      sub.push(rss);
      await Space.API.KV.Put("RSSSUB", JSON.stringify(sub));
      await bot.telegram.sendMessage(ADMIN_GROUP_ID, `<b>${rss.title}</b>\n 订阅失败，已暂停订阅。`, { parse_mode: "HTML" });
    }
  }
  return sub
}
const RSS = {
  list,
  add,
  del,
  update,
};
export default RSS;
