import Setting from "../../../Helpers/Setting"
import RandomNum from "../../../Helpers/RandomNum"
let set = Setting("TelegrafBot")
let ADMIN_NAME = set.ADMIN_NAME

class Shell {
  constructor(shell) {
    this.args = shell.replace(/^>/, '').split(/\"([^\"]*?)\"|\s/);
    this.index = 0;
    this.shift = () => {
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
}

class HandleMessage {
  constructor(ctx) {
    this.ctx = ctx;
    this.message = ctx.message.text;
    this.username = ctx.message.from.username;
    this.args = {};
    this.status = 0;
    this.except_status = 0;
    this.new_chat_members_list = [];

    if (this.message) this.message = this.message.toLocaleLowerCase();
    if (ctx.message.new_chat_members) this.new_chat_members_list = ctx.message.new_chat_members;
    if (ctx.message && ctx.message.chat && ctx.message.chat.id) {
      this.chatid = ctx.message.chat.id
    }
    this.newChatMembers = function () {
      if (this.status) return this;
      this.type = 'newChatMembers';
      return this;
    }
    this.cleanStatus = function () {
      this.status = 0;
      return this;
    }
    this.setRandom = function (probability = 40) {
      if (this.status) return this;
      this.type = 'random';
      this.probability = probability
      return this;
    }
    this.pass = function () {
      if (this.status) return this;
      this.type = 'pass';
      return this;
    }
    this.block = function () {
      if (this.status) return this;
      this.type = 'block';
      return this;
    }
    this.admin = function (adminUsername = ADMIN_NAME) {
      if (this.status) return this;
      this.type = 'admin';
      this.adminUsername = adminUsername
      return this;
    };
    this.reg = function (reg) {
      if (this.status) return this;
      this.type = 'reg';
      this.textReg = reg;
      return this;
    };
    this.includes = function (list) {
      if (this.status) return this;
      this.type = 'includes';
      this.includesList = list;
      return this;
    };
    this.cmd = function (cmd) {
      if (this.status) return this;
      this.type = 'cmd';
      this.cmdReg = new RegExp(cmd);
      return this;
    };
    this.setArg = function (arg, defaultValue = 0) {
      if (this.status) return this;
      this.args[arg] = defaultValue;
      return this;
    };
    this.reply = async function (str) {
      return await this.action(() => {
        return this.ctx.reply(str);
      })
    }
    this.action = async function (call) {
      if (this.except_status) {
        this.except_status = 0;
        return this;
      }
      if (this.status) return this;
      if (this.type == 'cmd') {
        if (!/^>/.test(this.message)) return this;
        this.shell = new Shell(this.ctx.message.text);
        if (this.cmdReg.test(this.shell.shift())) {
          let shift = this.shell.shift();
          let index = 0;
          while (shift != ':#:') {
            let nextShift = null
            if (/-\w/.test(shift)) {
              let key = shift.replace(/^-/, "")
              if (isInArray(Object.keys(this.args), key)) {
                let next = this.shell.shift();
                let nextKey = next.replace(/^-/, "")
                if (next != ':#:' && /-\w/.test(next) && isInArray(Object.keys(this.args), nextKey)) {
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
          this.status = 1;
          this.fun = async () => {
            await call(this);
          };
        }
      }
      if (this.type == 'reg') {
        if (this.textReg.test(this.message)) {
          this.status = 1;
          this.fun = async () => {
            await call(this);
          };
        }
      }
      if (this.type == 'includes') {
        let flag = 0
        for (let i = 0; i < this.includesList.length; i++) {
          const ele = this.includesList[i];
          let eleReg = new RegExp(ele)
          if (eleReg.test(this.message)) {
            flag++;
          }
        }
        if (flag == this.includesList.length) {
          this.status = 1;
          this.fun = async () => {
            await call(this);
          };
        }
      }
      if (this.type == 'admin') {
        if (this.username == this.adminUsername) {
          this.status = 1;
          this.fun = async () => {
            await call(this);
          };
        }
      }
      if (this.type == 'random') {
        if (RandomNum(1, 100) <= this.probability) {
          this.status = 1;
          this.fun = async () => {
            await call(this);
          };
        }
      }
      if (this.type == 'newChatMembers') {
        if (this.new_chat_members_list.length) {
          this.status = 1;
          this.fun = async () => {
            await call(this);
          };
        }
      }
      if (this.type == 'pass') {
        await call(this);
      }
      if (this.type == 'block') {
        this.status = 1;
        this.fun = async () => {
          await call(this);
        };
      }
      if (this.status != 1) {
        this.args = {}
      }
      return this;
    };
    this.run = async function () {
      if (this.status) {
        await this.fun();
      }
      return this
    };
  }
}

export default HandleMessage;