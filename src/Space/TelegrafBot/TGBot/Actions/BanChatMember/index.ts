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
const Ban = require("./Ban.yml").default;

async function BanNewChatMemberByUserName(that: HandleMessage) {
  if (that.ctx.message["new_chat_members"] && that.ctx.message["new_chat_members"].length) {
    that.ctx.message["new_chat_members"].forEach((it: any) => {
      if (Ban.BanUserName.chatID.includes(that.chatid)) {
        const name = it.first_name ? (it.last_name ? it.first_name + " " + it.last_name : it.first_name) : ""
        for (const iterator of Ban.BanUserName.include) {
          if (name.includes(iterator)) {
            that.ctx.banChatMember(it.id)
            that.ctx.unbanChatMember(it.id)
            that.ctx.reply((that.username ? "@" + that.username + " " : "") + "检测到违规用户名：" + iterator);
            return
          }
        }
      }
      return
    })
  }
};

async function BanMessage(that: HandleMessage) {
  if (Ban.BanMessage.chatID.includes(that.chatid)) {
    const msg = that.ctx.message["text"];
    for (const iterator of Ban.BanMessage.include) {
      if (msg.includes(iterator)) {
        that.ctx.deleteMessage(that.ctx.message.message_id)
        that.ctx.banChatMember(that.userid)
        that.ctx.unbanChatMember(that.userid)
        that.ctx.reply((that.username ? "@" + that.username + " " : "") + "检测到违禁词：" + iterator);
        return
      }
    }
  }
};

async function BanChanelMessage(that: HandleMessage) {
  if (Ban.BanChanelMessage.chatID.includes(that.chatid)) {
    if (that.ctx.message.from.username == "Channel_Bot") {
      that.ctx.deleteMessage(that.ctx.message.message_id)
      that.ctx.banChatSenderChat(that.ctx.message.sender_chat["id"])
      that.ctx.reply("@" + that.ctx.message.sender_chat["username"] + " 禁止使用频道身份发言!");
    }
  }
};

export default {
  BanNewChatMemberByUserName,
  BanMessage,
  BanChanelMessage,
};
