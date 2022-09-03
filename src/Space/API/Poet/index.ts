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
import Space from "../../Space"
/**
 * https://github.com/chinese-poetry/chinese-poetry/issues/245
 * /poet
 */
/**
    参数名      参数作用	                                                      参数值
    type    选择唐诗还是宋词，留空唐诗	                                     tang or song
    from	  从第几个诗词样本开始取，留空随机        	                   tang：1~254 song：1~57
    with	  该样本中的第with首诗,留空随机	                                       0~999
    limit	  获取句数限制,留空为99即所有,超过原来诗词长度则按原来长度计算	            99
    start	  从第start句诗开始获取,留空为0	                                         0
    tran	  是否进行翻译,为true则翻译,默认为true	                            true or false
    author	是否显示作者,为true则显示,默认为true	                            true or false
 */
async function Poet(opt: any = {}): Promise<string> {
  opt.type = opt.type == "song" ? "song" : "tang"
  opt.from = opt.from || (opt.type == "song" ? Math.floor(Math.random() * 254 + 1) : Math.floor(Math.random() * 57 + 1))
  opt.with = opt.with || Math.floor(Math.random() * 100)
  opt.limit = opt.limit || 100
  opt.start = opt.start || 0
  opt.tran = opt.tran || "true"
  opt.author = opt.author || "true"
  const all = await Space.Helpers.Fetch.JSON(`https://raw.githubusercontent.com/chinese-poetry/chinese-poetry/master/json/poet.${opt.type}.${opt.from}000.json`)
  const poet_all = all[opt.with]
  let poet = ""
  for (let i = opt.start; i < poet_all["paragraphs"].length && i < opt.limit; i++) {
    poet += poet_all["paragraphs"][i]
  }
  if (opt.author == "true") {
    poet += `  --${poet_all["author"]}`
  }
  if (opt.tran == "true") {
    poet = await Space.API.ZH.Simplized(poet)
  }
  return poet
}
export default Poet;
