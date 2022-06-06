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
import Setting from "../../../Helpers/Setting"
import Space from "../../../Space";

async function Catch(err: string, ctx: Context<Update>) {
  await ctx.reply(`Ooops...`);
  const set = await Setting("TelegrafBot")
  const ADMIN_GROUP_ID = set.ADMIN_GROUP_ID
  const msg = `Ooops, encountered an error for ${ctx.updateType}:\n` + err + `\nInfo for ctx:\n` + JSON.stringify(ctx)
  await ctx.telegram.sendMessage(ADMIN_GROUP_ID, msg)
  // ctx.reply(msg);
  await Space.Helpers.Notify.Danger(`Error TelegrafBot`, msg.replace(/\n/g, "<br>"))
}

export default Catch;
