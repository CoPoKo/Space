import Space from "../../../../Space";

const Happypic = async (that: any) => {
  const ans = await Space.API.Happypic();
  return that.ctx.replyWithPhoto(ans);
};

export default Happypic;
