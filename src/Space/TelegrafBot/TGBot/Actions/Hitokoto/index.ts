import Space from "../../../../Space";

const Hitokoto = async (that: any) => {
  const ans = await Space.API.Hitokoto();
  return that.ctx.reply(ans);
};

export default Hitokoto;
