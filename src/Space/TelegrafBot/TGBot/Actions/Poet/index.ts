import Space from "../../../../Space";

const Poet = async (that: any) => {
  const ans = await Space.API.Poet()
  return that.ctx.reply(ans);
};

export default Poet;
