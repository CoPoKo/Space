import Space from "../../../../Space";

const DNSQuery = async (that: any) => {
  const opt: any = {}
  opt.type = that.args.t || "A"
  opt.name = that.args.n || "github.com"
  opt.edns_client_subnet = that.args.et || `1.0.0.1`
  opt.upstream = that.args.u || "cloudflare"
  opt.way = "get"
  opt.host = "true"
  opt.parse = "info"
  const ans = await Space.API.DNSQuery(opt);
  return that.ctx.reply(ans);
};

export default DNSQuery;
