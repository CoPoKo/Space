import Space from "../../../../Space";

const Soul = async that => {
  const ans = await Space.API.Soul();
  return that.ctx.reply(ans);
};

export default Soul;
