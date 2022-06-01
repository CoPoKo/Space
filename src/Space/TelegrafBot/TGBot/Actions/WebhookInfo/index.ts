import HandleMessage from "../../HandleMessage";

const WebhookInfo = async (that: HandleMessage) => {
  const ctx = that.ctx
  ctx.telegram.getWebhookInfo().then((data) => {
    return ctx.reply(JSON.stringify(data));
  })
};

export default WebhookInfo;
