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

const Niubi = async (that: HandleMessage) => {
  let name = "CoCo";
  const arr = /来点(\S*)笑话/.exec(that.ctx.message["text"])

  if (arr && Array.isArray(arr) && arr[1]) {
    name = arr[1];
  }
  if (that.ctx.message["entities"] && /nb/.test(that.ctx.message["text"])) {
    that.ctx.message["entities"].forEach((one: any) => {
      if (one.type == "mention") {
        name = that.ctx.message["text"].slice(one.offset + 1, one.length);
      }
    })
  }
  if (that.ctx.message["new_chat_members"] && that.ctx.message["new_chat_members"].length) {
    that.ctx.message["new_chat_members"].forEach((it: any) => {
      name = it.username || (it.first_name ? (it.last_name ? it.first_name + " " + it.last_name : it.first_name) : null);
      return
    })
  }
  const ans = await Space.API.Niubi(name)
  return that.ctx.reply(ans);
};

export default Niubi;
