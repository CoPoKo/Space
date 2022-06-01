import HandleMessage from "../../HandleMessage";

const ChatID = async (that: HandleMessage) => {
  const ctx = that.ctx
  await ctx.reply(String(ctx.chat.id));
};

export default ChatID;
