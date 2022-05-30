import { Context } from "telegraf";
import { Update } from "telegraf/typings/core/types/typegram";

async function Help(ctx: Context<Update>) {
  await ctx.replyWithSticker('CAACAgIAAxkBAAOYYQEqGYOuRBG2Xy4spVtmJkjeu3oAAv0NAAI2rBFKnRza3aJTPyQgBA')
  // ctx.reply("HelpInfo6666");
}

export default Help;
