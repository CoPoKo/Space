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
import { Context } from "telegraf";
import { Update } from "telegraf/typings/core/types/typegram";
import HandleMessage from "../../HandleMessage";

export default async (that: HandleMessage): Promise<void> => {
  const ctx = that.ctx
  const keyword = that.args.k
  const msg = that.ctx.message["text"];

  if (msg.match(/^>vlts/)) {
    // 不支持多个空格
    if (!keyword) return
    if (keyword === "主题文档") {
      ctx.reply("https://volantis.js.org/")
      return;
    }
    return search(keyword, ctx)
  } else {
    // 支持多个空格
    const keyword = msg.replace(/^主题文档搜索/, "").trim()
    if (!keyword) return
    return search(keyword, ctx)
  }
};

async function search(keyword: string, ctx: Context<Update>): Promise<void> {
  const res = await fetch("https://volantis.js.org/content.json");
  const text = await res.text();
  const data = JSON.parse(text);
  parseData(data).forEach(post => {
    if (contentSearch(post, keyword)) {
      ctx.reply(encodeURI(post.permalink + "?keyword=" + keyword));
    }
  });
}

function parseData(data: { pages: any; posts: any; }): any[] {
  return [...data.pages, ...data.posts]
}
function contentSearch(post: { text: string; }, keyword: string): boolean {
  const post_content = post.text.trim().toLowerCase();
  const keywords = keyword
    .trim()
    .toLowerCase()
    .split(/[-\s]+/);
  let foundMatch = false;
  let index_content = -1;
  if (post_content) {
    keywords.forEach(word => {
      index_content = post_content.indexOf(word);
      if (index_content < 0) {
        foundMatch = false;
      } else {
        foundMatch = true;
      }
    });
  }
  return foundMatch;
};
