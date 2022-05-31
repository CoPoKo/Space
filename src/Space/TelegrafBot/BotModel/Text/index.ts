import TGBot from "../../TGBot"
import HandleMessage from "../../TGBot/HandleMessage"
import IsInArray from "../../../Helpers/IsInArray"
const workflows = require("./workflows.yml").default;

async function Text(ctx: any) {
  // return ctx.reply(ctx.message)
  // await new TGBot.HandleMessage(ctx)
  //   .admin().action(async () => {
  //     return await new TGBot.HandleMessage(ctx)
  //       .cmd('WebhookInfo').action(async () => {
  //         return ctx.telegram.getWebhookInfo().then((data: any) => {
  //           return ctx.reply(JSON.stringify(data));
  //         })
  //       })
  //       .then((that: HandleMessage) => {
  //         return that.cmd('ChatID').action(async () => {
  //           return ctx.reply(ctx.chat.id);
  //         })
  //       })
  //       .then((that: HandleMessage) => {
  //         return that.cmd('coco').setArg('p', 'getMe').setArg('q', null).action(async (that: any) => {
  //           let q = []
  //           if (that.args.q) {
  //             q = that.args.q.split(",")
  //           }
  //           return ctx.telegram[that.args.p](...q).then((data: any) => {
  //             return ctx.reply(JSON.stringify(data));
  //           })
  //         })
  //       })
  //       .then((that: HandleMessage) => {
  //         return that.re(/coco test/).action(() => {
  //           return ctx.replyWithSticker("CAACAgIAAxkBAANTYQEkwBt3RLVALRhL4e6-qkWP7fQAApoOAAJzORBKVsUty3IbWNEgBA")
  //         })
  //       })
  //       .then((that: HandleMessage) => {
  //         return that.re(/在吗/).reply(`主人我在`)
  //       })
  //       .then((that: HandleMessage) => {
  //         return that.cmd('setu').setArg('k', 0).action(TGBot.Actions.Setu)
  //       })
  //       .then((that: HandleMessage) => {
  //         return that.run()
  //       })
  //   })
  //   .then((that: HandleMessage) => {
  //     return that.re(/在吗/).reply(`爪巴`)
  //   })
  //   .then((that: HandleMessage) => {
  //     return that.run()
  //   })

  workflows.forEach(async (workflow: any) => {
    let worker: HandleMessage = new TGBot.HandleMessage(ctx)
    for (const item of workflow.workflow) {
      const keys = Object.keys(item)

      if (IsInArray(keys, "re")) {
        worker.re(new RegExp(item.re))
      }
      if (IsInArray(keys, "cmd")) {
        worker.cmd(item.cmd)
      }
      if (IsInArray(keys, "arg")) {
        const args = Object.keys(item.arg)
        for (const arg of args) {
          worker.setArg(arg, item.arg[arg])
        }
      }
      if (IsInArray(keys, "pass")) {
        worker.pass()
      }
      if (IsInArray(keys, "includes")) {
        worker.includes(item.includes)
      }
      if (IsInArray(keys, "random")) {
        worker.setRandom(Number(item.random))
      }
      if (IsInArray(keys, "reply")) {
        worker.reply(item.reply)
      }
      if (IsInArray(keys, "action")) {
        worker.action(TGBot.Actions[item.action])
      }
      worker.cleanTrigger()
    }

    await worker.run()
  })

  // await new TGBot.HandleMessage(ctx)
  //   .re(/百度|度娘|baidu|谷歌|google|Google|bing|必应/).action(TGBot.Actions.SearchEngineLink)
  //   .then((that: HandleMessage) => {
  //     return that.run()
  //   })
  // await new TGBot.HandleMessage(ctx)
  //   .cmd('help').reply("no help")
  //   .then((that: HandleMessage) => {
  //     return that.cmd('unsplash').setArg('k', 'nature,water,sky,blue,sea').action(TGBot.Actions.Unsplash)
  //   })
  //   .then((that: HandleMessage) => {
  //     return that.cmd('cat').setArg('k', 'cat').action(TGBot.Actions.Unsplash)
  //   })
  //   .then((that: HandleMessage) => {
  //     return that.cmd('dog').setArg('k', 'dog').action(TGBot.Actions.Unsplash)
  //   })
  //   .then((that: HandleMessage) => {
  //     return that.cmd('bing').setArg('d', '0').action(TGBot.Actions.Bing)
  //   })
  //   .then((that: HandleMessage) => {
  //     return that.cmd('soul').action(TGBot.Actions.Soul)
  //   })
  //   .then((that: HandleMessage) => {
  //     return that.cmd('hitokoto').action(TGBot.Actions.Hitokoto)
  //   })
  //   .then((that: HandleMessage) => {
  //     return that.cmd('acg').action(TGBot.Actions.Happypic)
  //   })
  //   .then((that: HandleMessage) => {
  //     return that.cmd('nbnhhsh').setArg('k', 'nb').action(TGBot.Actions.Nbnhhsh)
  //   })
  //   .then((that: HandleMessage) => {
  //     return that.cmd('thum').setArg('u', 'https://www.google.com/').setArg('w', '1024').setArg('h', '1200').setArg('t', '1').action(TGBot.Actions.Thum)
  //   })
  //   .then((that: HandleMessage) => {
  //     return that.cmd('translate').setArg('k', 'CoCo').setArg('t', 'zh-cn').action(TGBot.Actions.GoogleTranslate)
  //   })
  //   .then((that: HandleMessage) => {
  //     return that.cmd('demd5').setArg('k', 'eb62f6b9306db575c2d596b1279627a4').action(TGBot.Actions.DecryptMd5)
  //   })
  //   .then((that: HandleMessage) => {
  //     return that.cmd('dns').setArg('n', 'github.com').setArg('t', 'A').setArg('u', 'cloudflare').setArg('e', '1.0.0.1').action(TGBot.Actions.DNSQuery)
  //   })
  //   .then((that: HandleMessage) => {
  //     return that.cmd('poet').action(TGBot.Actions.Poet)
  //   })
  //   .then((that: HandleMessage) => {
  //     return that.pass().action(TGBot.Actions.InterruptRepetition)
  //   })
  //   .then((that: HandleMessage) => {
  //     return that.re(/^:/).action(TGBot.Actions.WolframAlpha)
  //   })
  //   .then((that: HandleMessage) => {
  //     return that.re(/^。{1,}$/).action(TGBot.Actions.Balloon)
  //   })
  //   .then((that: HandleMessage) => {
  //     return that.re(/来点(\S*)笑话/).action(TGBot.Actions.Niubi)
  //   })
  //   .then((that: HandleMessage) => {
  //     return that.re(/https:\/\/|http:\/\//).setArg('w', '1024').setArg('h', '1200').setArg('t', '1').action(TGBot.Actions.Thum)
  //   })
  //   .then((that: HandleMessage) => {
  //     return that.re(/(^hi$)|(hi[^\w])|(^hello$)|(hello[^\w])/).reply(`Hey there`)
  //   })
  //   .then((that: HandleMessage) => {
  //     return that.re(/^\?$/).reply(`???`)
  //   })
  //   .then((that: HandleMessage) => {
  //     return that.re(/^？$/).reply(`？？？`)
  //   })
  //   .then((that: HandleMessage) => {
  //     return that.re(/你好/).reply(`Hello!`)
  //   })
  //   .then((that: HandleMessage) => {
  //     return that.re(/在？|在\?/).reply(`有事？`)
  //   })
  //   .then((that: HandleMessage) => {
  //     return that.re(/你的主人|your master/).action(TGBot.Actions.ReplyMaster)
  //   })
  //   .then((that: HandleMessage) => {
  //     return that.re(/早呀|早上|哦哈呦|起床啦/).reply(`新的一天也要加油鸭`)
  //   })
  //   .then((that: HandleMessage) => {
  //     return that.re(/^晚安|哦呀斯密|睡觉了|该睡了$/).reply(`晚安`)
  //   })
  //   .then((that: HandleMessage) => {
  //     return that.includes(["怎么", "啊"]).reply(`不告诉你`)
  //   })
  //   .then((that: HandleMessage) => {
  //     return that.includes(["发", "色图"]).reply(`有色图？`)
  //   })
  //   .then((that: HandleMessage) => {
  //     return that.includes(["看", "色图"]).reply(`色图在哪儿？`)
  //   })
  //   .then((that: HandleMessage) => {
  //     return that.includes(["发", "涩图"]).reply(`有涩图？`)
  //   })
  //   .then((that: HandleMessage) => {
  //     return that.includes(["看", "涩图"]).reply(`涩图在哪儿？`)
  //   })
  //   .then((that: HandleMessage) => {
  //     return that.includes(["来点", "色图"]).reply(`让我找找`)
  //   })
  //   .then((that: HandleMessage) => {
  //     return that.includes(["来点", "涩图"]).reply(`让我找找`)
  //   })
  //   .then((that: HandleMessage) => {
  //     return that.re(/^不够(色)|(涩)$/).reply(`让我找找`)
  //   })
  //   .then((that: HandleMessage) => {
  //     return that.includes(["我", "应该"]).reply(`确实`)
  //   })
  //   .then((that: HandleMessage) => {
  //     return that.includes(["不舒服"]).reply(`多喝热水`)
  //   })
  //   .then((that: HandleMessage) => {
  //     return that.includes(["你", "怎么"]).reply(`你在教我做事？`)
  //   })
  //   .then((that: HandleMessage) => {
  //     return that.includes(["你", "去"]).reply(`你在教我做事？`)
  //   })
  //   .then((that: HandleMessage) => {
  //     return that.includes(["变成", "了", "光"]).reply(`我也想要变成光`)
  //   })
  //   .then((that: HandleMessage) => {
  //     return that.includes(["明明是我先来的"]).reply(`为什么会变成这样呢……`)
  //   })
  //   .then((that: HandleMessage) => {
  //     return that.includes(["怎么样"]).reply(`就这？`)
  //   })
  //   .then((that: HandleMessage) => {
  //     return that.includes(["其实"]).reply(`真的吗？我不信。`)
  //   })
  //   .then((that: HandleMessage) => {
  //     return that.includes(["厉害"]).reply(`腻害`)
  //   })
  //   .then((that: HandleMessage) => {
  //     return that.includes(["恭喜"]).reply(`恭喜`)
  //   })
  //   .then((that: HandleMessage) => {
  //     return that.includes(["bing", "壁纸"]).setArg('d', '0').action(TGBot.Actions.Bing)
  //   })
  //   .then((that: HandleMessage) => {
  //     return that.run()
  //   })
  //   .then((that: HandleMessage) => {
  //     return that.cleanStatus()
  //   })
  //   .then((that: HandleMessage) => {
  //     return that.includes(["来点", "色图"]).action(TGBot.Actions.Setu)
  //   })
  //   .then((that: HandleMessage) => {
  //     return that.includes(["来点", "涩图"]).action(TGBot.Actions.Setu)
  //   })
  //   .then((that: HandleMessage) => {
  //     return that.includes(["来点", "色色"]).action(TGBot.Actions.Setu)
  //   })
  //   .then((that: HandleMessage) => {
  //     return that.includes(["来点", "涩涩"]).action(TGBot.Actions.Setu)
  //   })
  //   .then((that: HandleMessage) => {
  //     return that.re(/^不够(色)|(涩)$/).action(TGBot.Actions.Setu)
  //   })
  //   .then((that: HandleMessage) => {
  //     return that.includes(["来", "诗"]).action(TGBot.Actions.Poet)
  //   })
  //   .then((that: HandleMessage) => {
  //     return that.pass().action(TGBot.Actions.EmojiToSticker)
  //   })
  //   .then((that: HandleMessage) => {
  //     return that.setRandom(50).action(TGBot.Actions.ReplaceMa)
  //   })
  //   .then((that: HandleMessage) => {
  //     return that.setRandom(1).reply(`然后呢?`)
  //   })
  //   .then((that: HandleMessage) => {
  //     return that.run()
  //   })
}

export default Text;
