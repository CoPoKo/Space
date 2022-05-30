import HandleMessage from "../../HandleMessage";

const ReplaceMa = async (that: HandleMessage) => {
  if (!/在吗/.test(that.ctx.message["text"]) && /吗/.test(that.ctx.message["text"]))
    return that.ctx.reply(that.ctx.message["text"].replace('吗', '').replace('？', '！').replace('?', '!'));
};

export default ReplaceMa;
