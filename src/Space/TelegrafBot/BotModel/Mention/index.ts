import { Context } from "telegraf";
import { Update } from "telegraf/typings/core/types/typegram";
import TGBot from "../../TGBot"
async function Mention(ctx: Context<Update>) {
  // return ctx.reply(String(ctx.message))
  await new TGBot.HandleMessage(ctx)
    .re(/nb/).action(TGBot.Actions.Niubi)
    .then((that: any) => {
      return that.run()
    })
}

export default Mention;
