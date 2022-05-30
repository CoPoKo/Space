import Space from "../../../../Space";
import HandleMessage from "../../HandleMessage";

const Unsplash = async (that: HandleMessage) => {
  const ans = await Space.API.Unsplash(that.args.k)
  return that.ctx.replyWithPhoto(ans);
};

export default Unsplash;
