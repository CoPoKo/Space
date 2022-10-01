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
import TGBot from "../../TGBot"
async function Message(ctx: Context<Update>): Promise<void> {
  // return ctx.reply(String(ctx.message))
  await new TGBot.HandleMessage(ctx).newChatMembers().action(TGBot.Actions.Niubi).run()
  await new TGBot.HandleMessage(ctx).newChatMembers().action(TGBot.Actions.BanChatMember.BanNewChatMemberByUserName).run()
}

export default Message;
