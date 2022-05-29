import TGBot from "../../TGBot"
async function Message(ctx: any) {
  // return ctx.reply(ctx.message)
  await new TGBot.HandleMessage(ctx)
    .newChatMembers().action(TGBot.Actions.Niubi)
    .then((that: any) => {
      return that.run()
    })
}

export default Message;
