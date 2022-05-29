import Space from "../../../../Space";

const Unsplash = async (that: any) => {
  const ans = await Space.API.Unsplash(that.args.k)
  return that.ctx.replyWithPhoto(ans);
};

export default Unsplash;