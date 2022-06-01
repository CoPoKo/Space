import HandleMessage from "../../HandleMessage";

const CoCoShell = async (that: HandleMessage) => {
  const ctx = that.ctx
  let q = []
  if (that.args.q && that.args.q != "null") {
    q = that.args.q.split(",")
  }
  return ctx.telegram[that.args.p](...q).then((data: any) => {
    return ctx.reply(JSON.stringify(data));
  })
};

export default CoCoShell;
