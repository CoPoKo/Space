import Space from "../../../../Space";

const Thum = async (that: any) => {
  if (that.type == 'reg') {
    const arr = /(https:\/\/|http:\/\/)[^\ ]*/.exec(that.ctx.message.text)
    if (arr && Array.isArray(arr) && arr[1]) {
      that.args.u = arr[0];
    }
  }
  const opt: any = {};
  opt.url = that.args.u;
  opt.width = that.args.w;
  opt.height = that.args.h;
  opt.wait = that.args.t;
  const ans = await Space.API.Thum(opt);
  await fetch(ans).then(async () => {
    return await that.ctx.replyWithPhoto(ans, { "caption": opt.url });
  }).catch(() => { });
};

export default Thum;
