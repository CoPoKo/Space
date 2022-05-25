import handleSpace from "./Space";

addEventListener("fetch", (event) => {
  event.respondWith(
    handleSpace(event).catch(
      (err) => new Response(err.stack, { status: 500 })
    )
  );
});

// const { Telegraf } = require('telegraf');
// const { Application, Router } = require('@cfworker/web');
// const createTelegrafMiddware = require('cfworker-middware-telegraf');

// const bot = new Telegraf(Telegraf_BOT_TOKEN);


// bot.start(async ctx => {
//   await ctx.replyWithSticker('CAACAgIAAxkBAANTYQEkwBt3RLVALRhL4e6-qkWP7fQAApoOAAJzORBKVsUty3IbWNEgBA')
// });
// bot.help(async ctx => {
//   ctx.reply("HelpInfo");
// });

// const router = new Router();
// router.post(Telegraf_BOT_WEBHOOK, createTelegrafMiddware(bot));
// new Application().use(router.middleware).listen();