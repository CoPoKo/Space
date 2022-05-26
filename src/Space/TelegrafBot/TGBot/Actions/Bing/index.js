import Space from "../../../../Space";

const Bing = async that => {
  let ans = await Space.API.BingImgInfo(that.args.d);
  return that.ctx.replyWithPhoto(ans.url, { "caption": ans.copyright });
};

export default Bing;
