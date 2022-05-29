import Space from "../../../../Space";

const Hitokoto = async that => {
  const ans = await Space.API.Hitokoto();
  return that.ctx.reply(ans);
};

export default Hitokoto;
