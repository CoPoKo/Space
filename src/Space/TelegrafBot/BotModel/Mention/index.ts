import TGBot from "../../TGBot"
async function Mention(ctx: any) {
  // return ctx.reply(ctx.message)
  await new TGBot.HandleMessage(ctx)
    .reg(/nb/).action(TGBot.Actions.Niubi)
    .then((that: any) => {
      return that.run()
    })
}

export default Mention;
