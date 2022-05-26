import BotModel from "./BotModel";
const { Telegraf } = require('telegraf');
const bot = new Telegraf(Telegraf_BOT_TOKEN);

BotModel(bot);

export default bot;
