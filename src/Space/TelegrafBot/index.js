import BotCreate from "./Bot/index";
const { Telegraf } = require('telegraf');
const bot = new Telegraf(Telegraf_BOT_TOKEN);

BotCreate(bot);

export default bot;
