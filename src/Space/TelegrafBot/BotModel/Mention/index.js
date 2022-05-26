import TGBot from "../../TGBot"
async function Mention(ctx) {
  // return ctx.reply(ctx.message)
  await new TGBot.HandleMessage(ctx)
    .reg(/nb/).action(TGBot.Actions.Niubi)
    .then(that => {
      return that.run()
    })
}

export default Mention;
