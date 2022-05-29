import Space from "../../../../Space";

const WolframAlpha = async (that: any) => {
  const q = that.ctx.message.text.replace(/^:/, "").trim()
  let ans: any = await Space.API.WolframAlpha(q)
  ans = JSON.parse(ans)
  if (ans.en == ans.cn)
    return that.ctx.reply(ans.en);
  return that.ctx.reply(ans.cn + "\n" + ans.en);
};

export default WolframAlpha;
