import Space from "../../../../Space";

const Thum = async that => {
  if (that.type == 'reg') {
    let arr = /(https:\/\/|http:\/\/)[^\ ]*/.exec(that.ctx.message.text)
    if (arr && Array.isArray(arr) && arr[1]) {
      that.args.u = arr[0];
    }
  }
  let opt = {};
  opt.url = that.args.u;
  opt.width = that.args.w;
  opt.height = that.args.h;
  opt.wait = that.args.t;
  let ans = await Space.API.Thum(opt);
  await fetch(ans).then(async (res) => {
    return await that.ctx.replyWithPhoto(ans);
  }).catch(err => { });
};

export default Thum;
