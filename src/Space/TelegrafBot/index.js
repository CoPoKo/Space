import BotModel from "./BotModel";
const { Telegraf } = require('telegraf');
const bot = new Telegraf(Telegraf_BOT_TOKEN);

import session from '@telegraf/session'
bot.use(session())

BotModel(bot);

export default bot;
