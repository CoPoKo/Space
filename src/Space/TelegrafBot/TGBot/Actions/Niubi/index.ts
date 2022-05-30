import Space from "../../../../Space";
import HandleMessage from "../../HandleMessage";

const Niubi = async (that: HandleMessage) => {
  let name = "CoCo";
  const arr = /来点(\S*)笑话/.exec(that.ctx.message.text)

  if (arr && Array.isArray(arr) && arr[1]) {
    name = arr[1];
  }
  if (that.ctx.message.entities && /nb/.test(that.ctx.message.text)) {
    that.ctx.message.entities.forEach((one: any) => {
      if (one.type == "mention") {
        name = that.ctx.message.text.slice(one.offset + 1, one.length);
      }
    })
  }
  if (that.ctx.message.new_chat_members && that.ctx.message.new_chat_members.length) {
    that.ctx.message.new_chat_members.forEach((it: any) => {
      name = it.username;
      return
    })
  }
  const ans = await Space.API.Niubi(name)
  return that.ctx.reply(ans);
};

export default Niubi;
