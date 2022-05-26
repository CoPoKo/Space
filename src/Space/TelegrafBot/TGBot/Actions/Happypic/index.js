import Space from "../../../../Space";

const Happypic = async that => {
  let ans = await Space.API.Happypic();
  return that.ctx.replyWithPhoto(ans);
};

export default Happypic;
