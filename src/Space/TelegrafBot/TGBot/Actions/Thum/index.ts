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

const Thum = async (that: HandleMessage) => {
  if (that.type == 're') {
    const arr = /(https:\/\/|http:\/\/)[^\ ]*/.exec(that.ctx.message["text"])
    if (arr && Array.isArray(arr) && arr[1]) {
      that.args.u = arr[0];
    }
  }
  const opt: any = {};
  opt.url = that.args.u;
  opt.width = that.args.w;
  opt.height = that.args.h;
  opt.wait = that.args.t;
  const ans = await Space.API.Thum(opt);
  await fetch(ans).then(async () => {
    return await that.ctx.replyWithPhoto(ans, { "caption": opt.url });
  }).catch(() => { });
};

export default Thum;
