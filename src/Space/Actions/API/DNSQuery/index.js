import Space from "../../../Space"
/**
 * DNS查询
 * /dns/:upstream:/:way:/:host:?name=xxx&type=xxx&edns_client_subnet=x.x.x.x
 * /dns
 * /dns/get
 * /dns/ali/get/host
 * 
  参数	                    参数用途
  name	                需要解析的域名
  type                	解析形式,A or AAAA or CNAME等等
  edns_client_subnet	  EDNS的ip,默认开启为本机ip,开启此项功能可提高解析精准度.注:此功能在upstream为CloudFlare的情况下失效,因为CloudFlare为了用户隐私关闭此功能.
  way                   获取方式，默认doh方式，可使用以下参数: doh get
  host	                是否转化为host格式[仅在type为A或AAAA格式下生效]
  upstream	            上游DNS解析,默认为CloudFlare 回源<1ms
                        可使用以下参数:
                        google使用谷歌DNS,回源1~10ms
                        ali使用阿里CDN,回源50~150ms
                        dnspod使用腾讯云DNSPODCDN,回源10~80ms
  注：DoH 推荐直接选用https://dns.alidns.com/dns-query，而不是用本API的反代接口
 */
async function DNSQuery(ctx) {
  const path = ctx.pathname
  const opt = {}
  opt.type = ctx.getParam("type")
  opt.name = ctx.getParam("name")
  opt.edns_client_subnet = ctx.getParam("edns_client_subnet") || ctx.request.headers.get('x-real-ip') || `1.0.0.1`

  if (path.indexOf("host") != -1) {
    opt.host = "true"
  }
  if (path.indexOf("get") != -1) {
    opt.way = "get"
  }
  if (path.indexOf("google") != -1) {
    opt.upstream = "google"
  }
  if (path.indexOf("ali") != -1) {
    opt.upstream = "ali"
  }
  if (path.indexOf("dnspod") != -1) {
    opt.upstream = "dnspod"
  }
  if (path.indexOf("rubyfish") != -1) {
    opt.upstream = "rubyfish"
  }

  const ans = await Space.API.DNSQuery(opt)

  if (opt.way == "get") {
    return new Response(ans, Space.Helpers.Headers.js)
  } else {
    return fetch(new Request(ans, {
      method: "POST",
      redirect: 'manual',
      headers: ctx.request.headers,
      body: ctx.request.body
    }));
  }


}
export default DNSQuery;
