import Space from "../../../../Space";

const Setu = async (that: any) => {
  if (that.args.k == "p") {
    const ans = await Space.API.Setu.HappypicSex();
    return that.ctx.replyWithPhoto(ans);
  }
  if (that.args.k == "t") {
    const res = await Space.API.Setu.Tui();
    const file = await res.arrayBuffer();
    const form = new FormData();
    form.append('chat_id', that.ctx.chat.id);
    form.append('photo', new Blob([file], { type: "image/jpg" }));
    return fetch("https://api.telegram.org/bot" + Telegraf_BOT_TOKEN + "/sendPhoto", {
      method: 'post',
      body: form
    })
  }
  if (that.args.k == "s") {
    const res = await Space.API.Setu.SJMM();
    const file = await res.arrayBuffer();
    const form = new FormData();
    form.append('chat_id', that.ctx.chat.id);
    form.append('animation', new Blob([file], { type: "image/gif" }));
    form.append('width', "500");
    form.append('height', "500");
    return fetch("https://api.telegram.org/bot" + Telegraf_BOT_TOKEN + "/sendAnimation", {
      method: 'post',
      body: form
    })
  }
  const ans = await Space.API.Setu.El();
  return that.ctx.replyWithPhoto(ans);
};

export default Setu;
