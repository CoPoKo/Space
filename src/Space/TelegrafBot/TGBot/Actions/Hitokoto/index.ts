import Space from "../../../../Space";
import HandleMessage from "../../HandleMessage";

const Hitokoto = async (that: HandleMessage) => {
  const ans = await Space.API.Hitokoto();
  return that.ctx.reply(ans);
};

export default Hitokoto;
