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

const Setu = async (that: HandleMessage) => {
  if (that.args.k == "p") {
    const ans = await Space.API.Setu.HappypicSex();
    return that.ctx.replyWithPhoto(ans);
  }
  if (that.args.k == "t") {
    const res = await Space.API.Setu.Tui();
    const file = await res.arrayBuffer();
    const form = new FormData();
    form.append('chat_id', String(that.ctx.chat.id));
    form.append('photo', new Blob([file], { type: "image/jpg" }));
    return fetch("https://api.telegram.org/bot" + Telegraf_BOT_TOKEN + "/sendPhoto", {
      method: 'post',
      body: form
    })
  }
  if (that.args.k == "s") {
    const res = await Space.API.Setu.SJMM();
    const file = await res.arrayBuffer();
    const form = new FormData();
    form.append('chat_id', String(that.ctx.chat.id));
    form.append('animation', new Blob([file], { type: "image/gif" }));
    form.append('width', "500");
    form.append('height', "500");
    return fetch("https://api.telegram.org/bot" + Telegraf_BOT_TOKEN + "/sendAnimation", {
      method: 'post',
      body: form
    })
  }
  const ans = await Space.API.Setu.El();
  return that.ctx.replyWithPhoto(ans);
};

export default Setu;
