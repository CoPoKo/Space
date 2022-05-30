import Space from "../../../../Space";
import HandleMessage from "../../HandleMessage";

const Nbnhhsh = async (that: HandleMessage) => {
  const ans = await Space.API.Nbnhhsh(that.args.k);
  return that.ctx.reply(ans);;
};

export default Nbnhhsh;
