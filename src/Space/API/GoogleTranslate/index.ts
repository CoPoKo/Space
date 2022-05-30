import Space from "../../Space"

const GoogleTranslate: (s: string, conf: any) => Promise<any> = async (s, conf) => {
  const set = await Space.Helpers.Setting("GoogleTranslate");
  const translate_api = set.API;
  return fetch(translate_api, {
    method: "POST",
    headers: {
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko)",
    },
    body: JSON.stringify({
      "s": s,
      "conf": conf
    })
  }).then(e => e.json())
}
export default GoogleTranslate;
