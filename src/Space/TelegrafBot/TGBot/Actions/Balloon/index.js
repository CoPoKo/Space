import Space from "../../../../Space";

const Balloon = async that => {
  let ctx = that.ctx
  let num = ctx.message.text.split("。").length - 1
  if (num <= 5) {
    ctx.reply(ctx.message.text.replace(/。/g, "喵~"))
  } else {
    ctx.reply(`汪汪汪~`)
  }
};

export default Balloon;
