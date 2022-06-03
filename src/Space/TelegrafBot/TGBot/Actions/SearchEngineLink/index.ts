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
import Space from "../../../../Space";
import HandleMessage from "../../HandleMessage";

const SearchEngineLink = async (that: HandleMessage) => {
  const engineList = {
    baidu: {
      keywords: ["百度", "度娘", "baidu"],
      url: "https://www.baidu.com/s?wd=",
    },
    google: {
      keywords: ["谷歌", "google", "Google"],
      url: "https://www.google.com/search?q=",
    },
    bing: {
      keywords: ["bing", "必应"],
      url: "https://cn.bing.com/search?q=",
    },
    buhuibaidu: {
      keywords: ["不会百度"],
      url: "https://buhuibaidu.me/?s=",
    },
  };
  function getLinkByEngine(name: string, keyword: string) {
    keyword = encodeURI(keyword);
    if (engineList[name]) {
      return engineList[name].url + keyword;
    } else {
      for (const engine in engineList) {
        if (engineList[engine].keywords.includes(name)) {
          return engineList[engine].url + keyword;
        }
      }
      return "";
    }
  }
  const msg = that.ctx.message["text"];
  const engineString = msg.split(" ")[0];
  let keyword = msg.slice(engineString.length).trim();
  const buhuibaidu = msg.match(/不会百度(.*)吗/);
  if (buhuibaidu) {
    keyword = buhuibaidu[1].trim();
    that.ctx.reply(getLinkByEngine("buhuibaidu", keyword));
  } else {
    const content = getLinkByEngine(engineString, keyword);
    if (content) {
      await that.ctx.reply(content);
      const ans = await Space.API.Thum({ url: content, wait: 1 });
      await fetch(ans).then(async (res) => {
        return await that.ctx.replyWithPhoto(ans, { "caption": content });
      }).catch(err => { })
    }
  }
};

export default SearchEngineLink;
