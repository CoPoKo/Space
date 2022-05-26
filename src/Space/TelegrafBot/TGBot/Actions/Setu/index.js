import Space from "../../../../Space";

const Setu = async that => {
  if (that.args.k == "p") {
    let ans = await Space.API.Setu.HappypicSex();
    return that.ctx.replyWithPhoto(ans);
  }
  if (that.args.k == "t") {
    let res = await Space.API.Setu.Tui();
    res = await res.arrayBuffer()
    let form = new FormData();
    form.append('chat_id', that.ctx.chat.id);
    form.append('photo', new Blob([res], { type: "image/jpg" }));
    return fetch("https://api.telegram.org/bot" + Telegraf_BOT_TOKEN + "/sendPhoto", {
      method: 'post',
      body: form
    })
  }
  if (that.args.k == "s") {
    let res = await Space.API.Setu.SJMM();
    res = await res.arrayBuffer();
    let form = new FormData();
    form.append('chat_id', that.ctx.chat.id);
    form.append('animation', new Blob([res], { type: "image/gif" }));
    form.append('width', 500);
    form.append('height', 500);
    return fetch("https://api.telegram.org/bot" + Telegraf_BOT_TOKEN + "/sendAnimation", {
      method: 'post',
      body: form
    })
  }
  let ans = await Space.API.Setu.El();
  return that.ctx.replyWithPhoto(ans);
};

export default Setu;
