import HandleMessage from "../../HandleMessage";

const InterruptRepetition = async (that: HandleMessage) => {
  const ctx = that.ctx
  if (ctx.message && ctx.message.chat && ctx.message.chat.type && ctx.message.chat.type == "group") {
    if (ctx.message["text"]) {
      ctx["session"] ??= { messageList: [] }
      ctx["session"].messageList.push(ctx.message["text"])
      const messageList = ctx["session"].messageList
      const length = messageList.length
      if (length >= 4) {
        const myset = [...new Set(ctx["session"].messageList)]
        if (myset.length == 1) {
          if (myset[0] == `打断复读!`) {
            ctx.reply(`我生气了!`)
            ctx["session"].messageList.push(`我生气了!`)
            ctx["session"].messageList.shift()
          } else {
            ctx.reply(`打断复读!`)
            ctx["session"].messageList.push(`打断复读!`)
            ctx["session"].messageList.shift()
          }
        }
        ctx["session"].messageList.shift()
      }
    }
  }
};

export default InterruptRepetition;
