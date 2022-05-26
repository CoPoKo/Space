import Space from "../../../Space"
async function Catch(err, ctx) {
  ctx.reply(`Ooops...`);
  let set = Space.Helpers.Setting("TelegrafBot")
  let ADMIN_GROUP_ID = set.ADMIN_GROUP_ID
  ctx.telegram.sendMessage(ADMIN_GROUP_ID, `Ooops, encountered an error for ${ctx.updateType}:\n` + err + `\nInfo for ctx:\n` + JSON.stringify(ctx))
  // ctx.reply(`Ooops, encountered an error for ${ctx.updateType}:\n` + err+`\n  ctx:\n`+JSON.stringify(ctx));
}

export default Catch;
