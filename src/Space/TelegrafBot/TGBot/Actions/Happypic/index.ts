import Space from "../../../../Space";
import HandleMessage from "../../HandleMessage";

const Happypic = async (that: HandleMessage) => {
  const ans = await Space.API.Happypic();
  return that.ctx.replyWithPhoto(ans);
};

export default Happypic;
