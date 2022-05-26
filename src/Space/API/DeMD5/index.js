import Space from "../../Space"

async function DeMD5(md5) {
  let data = {}
  if (md5) {
    // https://md5.gromweb.com/?md5=eb62f6b9306db575c2d596b1279627a4
    let MD5FetchURL = "https://md5.gromweb.com/?md5=" + md5
    let rs = await (await fetch(MD5FetchURL, {
      method: "GET",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko)",
        "X-Forwarded-For": "192.168.1.1"
      }
    })).text()
    rs = /<em class=\"long-content\ string\">(.*)<\/em>/.exec(rs)
    if (rs) rs = rs[1]
    data['ans'] = rs
  }
  return data
}
export default DeMD5;
