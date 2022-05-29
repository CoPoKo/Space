import Space from "../../../../Space";

const GoogleTranslate = async (that: any) => {
  const conf = {
    "to": that.args.t,
    "domain": "com"
  }
  const ans: any = await Space.API.GoogleTranslate(that.args.k, conf)
  return that.ctx.reply(ans.text);
};

export default GoogleTranslate;
