import Space from "../../../../Space";

const Hitokoto = async that => {
  let ans = await Space.API.Hitokoto();
  return that.ctx.reply(ans);
};

export default Hitokoto;
