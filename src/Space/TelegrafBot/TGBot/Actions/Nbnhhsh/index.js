import Space from "../../../../Space";

const Nbnhhsh = async that => {
  let ans = await Space.API.Nbnhhsh(that.args.k);
  return that.ctx.reply(ans);;
};

export default Nbnhhsh;