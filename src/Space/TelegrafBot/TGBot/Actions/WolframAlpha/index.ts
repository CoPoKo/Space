import Space from "../../../../Space";
import HandleMessage from "../../HandleMessage";

const WolframAlpha = async (that: HandleMessage) => {
  const q = that.ctx.message.text.replace(/^:/, "").trim()
  let ans = await Space.API.WolframAlpha(q)
  if (ans.en == ans.cn)
    return that.ctx.reply(ans.en);
  return that.ctx.reply(ans.cn + "\n" + ans.en);
};

export default WolframAlpha;
