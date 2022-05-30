import Space from "../../../../Space";
import HandleMessage from "../../HandleMessage";

const Soul = async (that: HandleMessage) => {
  const ans = await Space.API.Soul();
  return that.ctx.reply(ans);
};

export default Soul;
