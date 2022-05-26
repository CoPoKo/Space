import TGBot from "../../TGBot"
async function Message(ctx) {
  // return ctx.reply(ctx.message)
  await new TGBot.HandleMessage(ctx)
    .newChatMembers().action(TGBot.Actions.Niubi)
    .then(that => {
      return that.run()
    })
}

export default Message;
