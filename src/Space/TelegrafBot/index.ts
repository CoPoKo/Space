import BotModel from "./BotModel";
const { Telegraf } = require('telegraf');
const bot = new Telegraf(Telegraf_BOT_TOKEN);

import session from '@telegraf/session'
bot.use(session(bot))

BotModel(bot);

export default bot;

// Your code here, but do not `bot.launch()`

// https://telegrafjs.org/

// bot.start((ctx) => ctx.reply('Welcome'))
// bot.help((ctx) => ctx.reply('Send me a sticker'))
// bot.on('sticker', (ctx) => ctx.reply('👍'))
// bot.hears('hi', (ctx) => ctx.reply('Hey there'))
// bot.command('oldschool', (ctx) => ctx.reply('Hello'))
// bot.command('modern', ({ reply }) => reply('Yo'))
// bot.command('hipster', Telegraf.reply('λ'))
// bot.on('text', (ctx) => ctx.reply('Hello World'))