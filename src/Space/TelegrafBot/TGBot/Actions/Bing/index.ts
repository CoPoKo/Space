import Space from "../../../../Space";
import HandleMessage from "../../HandleMessage";

const Bing = async (that: HandleMessage) => {
  const ans = await Space.API.BingImgInfo(that.args.d);
  return that.ctx.replyWithPhoto(ans.url, { "caption": ans.copyright });
};

export default Bing;
