import Space from "../../Space"

async function GoogleTranslate(s, conf) {
  const set = await Space.Helpers.Setting("GoogleTranslate");
  const translate_api = set.API;
  const ans = await (await fetch(translate_api, {
    method: "POST",
    headers: {
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko)",
    },
    body: JSON.stringify({
      "s": s,
      "conf": conf
    })
  })).json()
  return ans
}
export default GoogleTranslate;
