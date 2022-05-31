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
  public shift = () => {
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
  public status: number;
  public triggerTotalNum: number;
  public triggerPassNum: number;
  public fun: Function[];
  [x: string]: any;
  constructor(ctx: Context<Update>) {
    this.ctx = ctx;
    this.message = ctx.message["text"];
    this.username = ctx.message.from.username;
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
  }
  public newChatMembers = function () {
    if (this.status) return this;
    this.type = 'newChatMembers';
    this.triggerTotalNum++;
    if (this.new_chat_members_list.length) {
      this.triggerPassNum++;
    }
    return this;
  }
  public cleanStatus = function () {
    this.status = 0;
    return this;
  }
  public cleanTrigger = function () {
    this.args = {}
    this.triggerTotalNum = 0;
    this.triggerPassNum = 0;
    return this;
  }
  public setRandom = function (probability = 40) {
    if (this.status) return this;
    this.type = 'random';
    this.probability = probability
    this.triggerTotalNum++;
    if (RandomNum(1, 100) <= this.probability) {
      this.triggerPassNum++;
    }
    return this;
  }

  public admin = async function () {
    if (this.status) return this;
    this.type = 'admin';
    if (!this.adminUsername) {
      const set = await Setting("TelegrafBot")
      const ADMIN_NAME = set.ADMIN_NAME
      this.adminUsername = ADMIN_NAME
    }
    this.triggerTotalNum++;
    if (this.username == this.adminUsername) {
      this.triggerPassNum++;
    }
    return this;
  };
  public re = function (re: RegExp) {
    if (this.status) return this;
    this.type = 're';
    this.textReg = re;
    this.triggerTotalNum++;
    if (this.textReg.test(this.message)) {
      this.triggerPassNum++;
    }
    return this;
  };
  public includes = function (list: any) {
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
  public cmd = function (cmd: string) {
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
  public setArg = function (arg: string | number, defaultValue = 0) {
    if (this.status) return this;
    this.args[arg] = defaultValue;
    return this;
  };
  public reply = function (str: any) {
    return this.action(() => {
      return this.ctx.reply(str);
    })
  }
  public action = function (call: (arg0: any) => any) {
    if (this.triggerTotalNum && this.triggerTotalNum === this.triggerPassNum) {
      this.status = 1;
      this.fun.push(call(this));
    }
    return this;
  };
  public run = async function () {
    if (this.status) {
      this.fun.forEach(async (e: () => any) => {
        await e();
      })
    }
    return this
  };
}

export default HandleMessage;