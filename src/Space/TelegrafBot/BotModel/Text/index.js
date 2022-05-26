import TGBot from "../../TGBot"
import Setting from "../../../Helpers/Setting"

async function Text(ctx) {
  // return ctx.reply(ctx.message)
  await new TGBot.HandleMessage(ctx)
    .admin().action(async () => {
      return await new TGBot.HandleMessage(ctx)
        .cmd('WebhookInfo').action(async () => {
          return ctx.telegram.getWebhookInfo().then(data => {
            return ctx.reply(JSON.stringify(data));
          })
        })
        .then(that => {
          return that.cmd('ChatID').action(async () => {
            return ctx.reply(ctx.chat.id);
          })
        })
        .then(that => {
          return that.cmd('coco').setArg('p', 'getMe').setArg('q', null).action(async (that) => {
            let q = []
            if (that.args.q) {
              q = that.args.q.split(",")
            }
            return ctx.telegram[that.args.p](...q).then(data => {
              return ctx.reply(JSON.stringify(data));
            })
          })
        })
        .then(that => {
          return that.reg(/test/).action(() => {
            return ctx.replyWithSticker("CAACAgIAAxkBAANTYQEkwBt3RLVALRhL4e6-qkWP7fQAApoOAAJzORBKVsUty3IbWNEgBA")
          })
        })
        .then(that => {
          return that.reg(/在吗/).reply(`主人我在`)
        })
        .then(that => {
          return that.run()
        })
    })
    .then(that => {
      return that.reg(/在吗/).reply(`爪巴`)
    })
    .then(that => {
      return that.run()
    })
  await new TGBot.HandleMessage(ctx)
    .reg(/百度|度娘|baidu|谷歌|google|Google|bing|必应/).action(TGBot.Actions.SearchEngineLink)
    .then(that => {
      return that.run()
    })
  await new TGBot.HandleMessage(ctx)
    .cmd('help').action((that) => {
      return that.ctx.reply("no help");
    })
    .then(that => {
      return that.cmd('unsplash').setArg('k', 'nature,water,sky,blue,sea').action(TGBot.Actions.Unsplash)
    })
    .then(that => {
      return that.cmd('cat').setArg('k', 'cat').action(TGBot.Actions.Unsplash)
    })
    .then(that => {
      return that.cmd('dog').setArg('k', 'dog').action(TGBot.Actions.Unsplash)
    })
    .then(that => {
      return that.cmd('bing').setArg('d', '0').action(TGBot.Actions.Bing)
    })
    .then(that => {
      return that.cmd('soul').action(TGBot.Actions.Soul)
    })
    .then(that => {
      return that.cmd('hitokoto').action(TGBot.Actions.Hitokoto)
    })
    .then(that => {
      return that.cmd('acg').action(TGBot.Actions.Happypic)
    })
    .then(that => {
      return that.cmd('setu').setArg('k', 0).action(TGBot.Actions.Setu)
    })
    .then(that => {
      return that.cmd('nbnhhsh').setArg('k', 'nb').action(TGBot.Actions.Nbnhhsh)
    })
    .then(that => {
      return that.cmd('thum').setArg('u', 'https://www.google.com/').setArg('w', '1024').setArg('h', '1200').setArg('t', '1').action(TGBot.Actions.Thum)
    })
    .then(that => {
      return that.reg(/你好/).reply(`Hello!`)
    })
    .then(that => {
      return that.reg(/在？|在\?/).reply(`有事？`)
    }).then(async (that) => {
      const set = await Setting("TelegrafBot")
      const ADMIN_NAME = set.ADMIN_NAME
      return that.reg(/你的主人|your master/).reply(`@${ADMIN_NAME}`)
    }).then(that => {
      return that.run()
    })
}

export default Text;
