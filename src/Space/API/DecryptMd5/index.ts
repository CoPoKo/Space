const DecryptMd5: (md5: string) => Promise<string> = async (md5) => {
  if (md5) {
    // https://md5.gromweb.com/?md5=eb62f6b9306db575c2d596b1279627a4
    const MD5FetchURL = "https://md5.gromweb.com/?md5=" + md5
    return await fetch(MD5FetchURL, {
      method: "GET",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko)",
        "X-Forwarded-For": "192.168.1.1"
      }
    })
      .then(e => e.text())
      .then(e => /<em class=\"long-content\ string\">(.*)<\/em>/.exec(e))
      .then(e => {
        if (e)
          return e[1]
        else
          return "Not Found"
      })
  }
  return "null"
}


export default DecryptMd5;
