import { Context } from "telegraf";
import { Update } from "telegraf/typings/core/types/typegram";
import TGBot from "../../TGBot"
async function Message(ctx: Context<Update>) {
  // return ctx.reply(String(ctx.message))
  await new TGBot.HandleMessage(ctx).newChatMembers().action(TGBot.Actions.Niubi).run()
}

export default Message;
