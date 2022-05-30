import Space from "../../../../Space";

const DecryptMd5 = async (that: any) => {
  const md5 = that.args.k
  const ans = await Space.API.DecryptMd5(md5)
  if (ans)
    return that.ctx.reply(ans);
  else
    return that.ctx.reply("Not Found.");
};

export default DecryptMd5;
