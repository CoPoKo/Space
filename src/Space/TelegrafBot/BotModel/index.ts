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
import Start from "./Start";
import Help from "./Help";
import Sticker from "./Sticker";
import Catch from "./Catch";
import Message from "./Message";
import Mention from "./Mention";
import Text from "./Text";
import { Telegraf, Context } from "telegraf";
import { Update } from "telegraf/typings/core/types/typegram";

function BotModel(bot: Telegraf<Context<Update>>): void {
  bot.start(Start);
  bot.help(Help);
  bot.on("sticker", Sticker);
  bot.hears(/^@.*/, Mention);
  bot.on(["text", 'document', 'photo'], Text);
  bot.on("message", Message);
  bot.catch(Catch);
}
export default BotModel;
