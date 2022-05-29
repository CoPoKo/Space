import Space from "../../../../Space";

const GoogleTranslate = async that => {
  const conf = {
    "to": that.args.t,
    "domain": "com"
  }
  const ans = await Space.API.GoogleTranslate(that.args.k, conf)
  return that.ctx.reply(ans.text);
};

export default GoogleTranslate;
