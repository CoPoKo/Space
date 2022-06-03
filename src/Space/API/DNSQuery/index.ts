/*!
 * ==========================================================================
 * "CoPoKo Space" License
 * GNU General Public License version 3.0 (GPLv3)
 * ==========================================================================
 * This file is part of "CoPoKo Space"
 *
 * "CoPoKo Space" is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * "CoPoKo Space" is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with "CoPoKo Space". If not, see <http://www.gnu.org/licenses/>.
 * ==========================================================================
*/
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
async function DNSQuery(opt: any = {}) {
  opt.type = opt.type || "A"
  opt.name = opt.name || "mhuig.top"
  opt.edns_client_subnet = opt.edns_client_subnet || `1.0.0.1`
  opt.upstream = opt.upstream || "cloudflare"
  opt.way = opt.way || "doh"
  opt.host = opt.host || "false"
  let FetchURL = ""
  // POST
  const DoH_Set = {
    "cloudflare": "https://cloudflare-dns.com/dns-query",
    "google": "https://dns.google/dns-query",
    "ali": "https://dns.alidns.com/dns-query",
    "dnspod": "https://doh.pub/dns-query",
    "rubyfish": "https://dns.rubyfish.cn/dns-query",
  }
  // GET
  const Get_Set = {
    "cloudflare": "https://cloudflare-dns.com/dns-query",
    "google": "https://dns.google/resolve",
    "ali": "https://dns.alidns.com/resolve",
    "dnspod": "https://doh.pub/dns-query",
    "rubyfish": "https://dns.rubyfish.cn/dns-query",
  }
  if (opt.way == "doh") {
    FetchURL = DoH_Set[opt.upstream]
    return FetchURL
  } else {
    FetchURL = Get_Set[opt.upstream]
  }

  if (opt.way == "get") {
    FetchURL += `?name=${opt.name}&type=${opt.type}&edns_client_subnet=${opt.edns_client_subnet}`
    const _fetch = await fetch(FetchURL, { headers: { accept: "application/dns-json" } })
    const _text = await _fetch.text()
    if (opt.host == "true") {
      const _Answer = await JSON.parse(_text)["Answer"]
      let _hosts = ""
      if (opt.parse && opt.parse == "info") {
        for (let i = 0; i < _Answer.length; i++) {
          _hosts += `${_Answer[i]["name"]} => ${_Answer[i]["data"]}\n`
        }
        return _hosts
      }
      if ((opt.type == "A" || opt.type == "AAAA")) {
        for (let i = 0; i < _Answer.length; i++) {
          if (checkipv4(_Answer[i]["data"]) || checkipv6(_Answer[i]["data"])) {
            _hosts += `${_Answer[i]["data"]} ${opt.name}\n`
          }
        }
        return _hosts
      }
    }
    // opt.type == "CNAME"
    return _text
  }


}
function checkipv4(ip: string) {
  return ip.match(/^((25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(25[0-5]|2[0-4]\d|[01]?\d\d?)$/) != null ? true : false
}
function checkipv6(ip: string) {
  return ip.match(/^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/) != null ? true : false
}
export default DNSQuery;
