import Space from "../../../../Space";

const DecryptMd5 = async that => {
  const md5 = that.args.k
  const ans = await Space.API.DeMD5(md5)
  if (ans.ans)
    return that.ctx.reply(ans.ans);
  else
    return that.ctx.reply("Not Found.");
};

export default DecryptMd5;
