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
import HandleMessage from "../../HandleMessage";
const messageList: Array<string> = []
const InterruptRepetition = async (that: HandleMessage) => {
  const ctx = that.ctx
  if (ctx.message && ctx.message.chat && ctx.message.chat.type && ctx.message.chat.type == "group") {
    if (ctx.message["text"]) {
      messageList.push(ctx.message["text"])
      const length = messageList.length
      if (length >= 4) {
        const myset = [...new Set(messageList)]
        if (myset.length == 1) {
          if (myset[0] == `打断复读!`) {
            ctx.reply(`我生气了!`)
            messageList.push(`我生气了!`)
            messageList.shift()
          } else {
            ctx.reply(`打断复读!`)
            messageList.push(`打断复读!`)
            messageList.shift()
          }
        }
        messageList.shift()
      }
    }
  }
};

export default InterruptRepetition;
