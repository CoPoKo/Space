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
import Setting from "../../../Helpers/Setting"
import RandomNum from "../../../Helpers/RandomNum"
import { Context } from "telegraf";
import { Update } from "typegram";
import IsInArray from "../../../Helpers/IsInArray";

class Shell {
  private index: number;
  private args: string[];
  constructor(shell: string) {
    this.args = shell.replace(/^>/, '').split(/\"([^\"]*?)\"|\s/);
    this.index = 0;
  }
  public shift = (): any => {
    let arg = this.args[this.index];
    this.index++;
    if (arg) {
      return arg;
    } else if (this.index >= this.args.length) {
      return ':#:';
    } else {
      return this.shift();
    }
  };
}

class HandleMessage {
  public ctx: Context<Update>;
  public message: string;
  public chatid: number;
  public username: string;
  public userid: number;
  public status: number;
  public triggerTotalNum: number;
  public triggerPassNum: number;
  public isBot: boolean;
  public fun: Function[];
  [x: string]: any;
  constructor(ctx: Context<Update>) {
    this.ctx = ctx;
    this.message = ctx.message["text"];
    this.username = ctx.message.from.username;
    this.userid = ctx.message.from.id;
    this.isBot = ctx.message.from.is_bot;
    this.args = {};
    this.status = 0;
    this.triggerTotalNum = 0;
    this.triggerPassNum = 0;
    this.new_chat_members_list = [];
    this.fun = [];

    if (this.message) this.message = this.message.toLocaleLowerCase();
    if (ctx.message["new_chat_members"]) this.new_chat_members_list = ctx.message["new_chat_members"];
    if (ctx.message && ctx.message.chat && ctx.message.chat.id) {
      this.chatid = ctx.message.chat.id
    }
    if (ctx.message && ctx.message["document"]) {
      this.file = true
      this.document = ctx.message["document"]
      this.file_id = this.document.file_id
      this.file_name = this.document.file_name
      this.file_mime_type = this.document.mime_type
    }
    if (ctx.message && ctx.message["photo"]) {
      this.file = true
      this.photo = ctx.message["photo"]
      this.file_id = this.photo[this.photo.length - 1].file_id
    }
  }
  public cleanStatus = function (): any {
    this.status = 0;
    return this;
  }
  public cleanTrigger = function (): any {
    this.triggerTotalNum = 0;
    this.triggerPassNum = 0;
    return this;
  }
  public setRandom = function (probability = 40): any {
    if (this.status) return this;
    this.type = 'random';
    this.probability = probability
    this.triggerTotalNum++;
    if (RandomNum(1, 100) <= this.probability) {
      this.triggerPassNum++;
    }
    return this;
  }
  public newChatMembers = function (): any {
    if (this.status) return this;
    this.type = 'newChatMembers';
    this.triggerTotalNum++;
    if (this.new_chat_members_list.length) {
      this.triggerPassNum++;
    }
    return this;
  }
  public admin = async function (): Promise<boolean> {
    if (this.status) return this;
    this.type = 'admin';
    if (!this.adminUsername) {
      const set = await Setting("TelegrafBot")
      const ADMIN_ID = set.ADMIN_ID
      this.adminUserId = ADMIN_ID
    }
    if (this.userid == this.adminUserId) {
      return true
    }
    return false;
  };
  public re = function (re: RegExp): any {
    if (this.status) return this;
    this.type = 're';
    this.textReg = re;
    this.triggerTotalNum++;
    if (this.textReg.test(this.message)) {
      this.triggerPassNum++;
    }
    return this;
  };
  public includes = function (list: Array<string>): any {
    if (this.status) return this;
    this.type = 'includes';
    this.includesList = list;
    let flag = 0
    for (let i = 0; i < this.includesList.length; i++) {
      const ele = this.includesList[i];
      let eleReg = new RegExp(ele)
      if (eleReg.test(this.message)) {
        flag++;
      }
    }
    this.triggerTotalNum++;
    if (flag == this.includesList.length) {
      this.triggerPassNum++;
    }
    return this;
  };
  public cmd = function (cmd: string): any {
    if (this.status) return this;
    this.type = 'cmd';
    this.cmdReg = new RegExp(cmd);
    this.triggerTotalNum++;
    if (!/^>/.test(this.message)) return this;
    this.shell = new Shell(this.ctx.message.text);
    if (this.cmdReg.test(this.shell.shift())) {
      let shift = this.shell.shift();
      let index = 0;
      while (shift != ':#:') {
        let nextShift = null
        if (/-\w/.test(shift)) {
          let key = shift.replace(/^-/, "")
          if (IsInArray(Object.keys(this.args), key)) {
            let next = this.shell.shift();
            let nextKey = next.replace(/^-/, "")
            if (next != ':#:' && /-\w/.test(next) && IsInArray(Object.keys(this.args), nextKey)) {
              this.args[key] = 1
              nextShift = next
            } else {
              this.args[key] = next
            }
          }
        } else {
          this.args[Object.keys(this.args)[index]] = shift;
        }
        index++;
        if (nextShift) {
          shift = nextShift;
        } else {
          shift = this.shell.shift();
        }
      }
      this.triggerPassNum++;
    }

    return this;
  };
  public setArg = function (arg: string | number, defaultValue: string | number = 0): any {
    if (this.status) return this;
    this.args[arg] = defaultValue;
    return this;
  };
  public reply = function (str: string): any {
    return this.action(() => {
      return this.ctx.reply(str);
    })
  }
  public action = function (call: (arg0: any) => any): any {
    if (this.triggerTotalNum && this.triggerTotalNum === this.triggerPassNum) {
      this.status = 1;
      this.fun.push(call(this));
    }
    if (this.status != 1) {
      this.args = {}
    }
    return this;
  };
  public run = async function (): Promise<any> {
    if (this.status && !this.isBot) {
      this.fun.forEach(async (e: () => any) => {
        await e();
      })
    }
    return this
  };
}

export default HandleMessage;