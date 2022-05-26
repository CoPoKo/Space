import Setting from "../../../Helpers/Setting"

async function Catch(err, ctx) {
  await ctx.reply(`Ooops...`);
  const set = await Setting("TelegrafBot")
  const ADMIN_GROUP_ID = set.ADMIN_GROUP_ID
  await ctx.telegram.sendMessage(ADMIN_GROUP_ID, `Ooops, encountered an error for ${ctx.updateType}:\n` + err + `\nInfo for ctx:\n` + JSON.stringify(ctx))
  // ctx.reply(`Ooops, encountered an error for ${ctx.updateType}:\n` + err+`\n  ctx:\n`+JSON.stringify(ctx));
}

export default Catch;
