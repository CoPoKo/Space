import Space from "../../../../Space";
import HandleMessage from "../../HandleMessage";

const Poet = async (that: HandleMessage) => {
  const ans = await Space.API.Poet()
  return that.ctx.reply(ans);
};

export default Poet;
