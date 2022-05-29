import Space from "../../../../Space";

const ReplaceMa = async (that: any) => {
  if (!/在吗/.test(that.ctx.message.text) && /吗/.test(that.ctx.message.text))
    return that.ctx.reply(that.ctx.message.text.replace('吗', '').replace('？', '！').replace('?', '!'));
};

export default ReplaceMa;
