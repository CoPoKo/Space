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
import bot from './TelegrafBot'
import Space from './Space'
import Setting from './Helpers/Setting';
import RSSContext from '../types/RSSContext';

async function handleScheduled(event: ScheduledEvent) {
  const Hours = UTC8Hours(new Date(event.scheduledTime).getHours())
  const Minutes = new Date(event.scheduledTime).getMinutes()

  if (Hours == 2 && Minutes == 0) {
    await Space.API.CF.createRoute();
    await Space.API.CF.setSecurityLevel("essentially_off")
  }
  if (Hours == 6 && Minutes == 0) {
    const set = await Setting("TelegrafBot")
    const PUBLIC_GROUP_ID = set.PUBLIC_GROUP_ID
    const ans = await Space.API.BingImgInfo();
    await bot.telegram.sendPhoto(PUBLIC_GROUP_ID, ans.url, { "caption": ans.copyright });
  }
  if (Hours == 7 && Minutes == 0) {
    const set = await Setting("TelegrafBot")
    const ADMIN_GROUP_ID = set.TEST_GROUP_ID
    const RSSset = await Setting("RSS")
    const RSSAPI = RSSset.API
    let sub: RSSContext[] = await Space.API.KV.Get("RSSSUB").then(JSON.parse);
    if (!sub) {
      sub = []
    }

    for await (const item of sub) {
      if (!item.status) {
        return
      }
      if (item.errorTime > 10) {
        return
      }
      const res = await fetch(`${RSSAPI}/api/xml2json`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify({
          url: item.url,
        }),
      });
      const feed: any = await res.json();
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
          console.log(sub);
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
        if (rss.errorTime >= 10) {
          await bot.telegram.sendMessage(ADMIN_GROUP_ID, `<b>${rss.title}</b>\n 连续多次失败，已暂停订阅。`, { parse_mode: "HTML" });
        }
      }
    }
  }


}

function UTC8Hours(Hours: number) {
  let UTC8Hours = Hours + 8
  if (UTC8Hours > 24) {
    UTC8Hours = UTC8Hours - 24
  }
  return UTC8Hours
}

export default handleScheduled;
