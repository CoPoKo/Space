import Space from "../../../../Space";

const GoogleTranslate = async that => {
  let conf = {
    "to": that.args.t,
    "domain": "com"
  }
  let ans = await Space.API.GoogleTranslate(that.args.k, conf)
  return that.ctx.reply(ans.text);
};

export default GoogleTranslate;
