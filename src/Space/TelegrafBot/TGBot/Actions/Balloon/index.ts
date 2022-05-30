import Space from "../../../../Space";
import HandleMessage from "../../HandleMessage";

const Balloon = async (that: HandleMessage) => {
  const ctx = that.ctx
  const num = ctx.message.text.split("。").length - 1
  if (num <= 5) {
    ctx.reply(ctx.message.text.replace(/。/g, "喵~"))
  } else {
    ctx.reply(`汪汪汪~`)
  }
};

export default Balloon;
