import Space from "../Space";

const { Telegraf } = require('telegraf');
const bot = new Telegraf(Telegraf_BOT_TOKEN);


bot.start(async ctx => {
  ctx.replyWithSticker('CAACAgIAAxkBAANTYQEkwBt3RLVALRhL4e6-qkWP7fQAApoOAAJzORBKVsUty3IbWNEgBA')
});
bot.help(async ctx => {
  ctx.reply("HelpInfo19");
});


export default bot;
