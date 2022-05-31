import HandleMessage from "../../HandleMessage";
const messageList: Array<string> = []
const InterruptRepetition = async (that: HandleMessage) => {
  const ctx = that.ctx
  if (ctx.message && ctx.message.chat && ctx.message.chat.type && ctx.message.chat.type == "group") {
    if (ctx.message["text"]) {
      messageList.push(ctx.message["text"])
      const length = messageList.length
      if (length >= 4) {
        const myset = [...new Set(messageList)]
        if (myset.length == 1) {
          if (myset[0] == `打断复读!`) {
            ctx.reply(`我生气了!`)
            messageList.push(`我生气了!`)
            messageList.shift()
          } else {
            ctx.reply(`打断复读!`)
            messageList.push(`打断复读!`)
            messageList.shift()
          }
        }
        messageList.shift()
      }
    }
  }
};

export default InterruptRepetition;
