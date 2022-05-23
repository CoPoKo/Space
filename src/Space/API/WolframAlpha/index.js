import Space from "../../Space"

async function WolframAlpha(question){
  let set = await Space.Helpers.Setting("WolframAlpha");
  let APPID = set.APPID;
  let s_en = await Space.API.GoogleTranslate(question,{
    "to": "en",
    "domain": "com"
  });
  let FetchURL = "https://api.wolframalpha.com/v1/spoken?appid=" + APPID + "&i=" + s_en.text
  let ans = await Space.Helpers.Fetch.Text(FetchURL)
  ans = ans.replace(/No spoken result available/g,"I don't know.")
  let ans_cn = await Space.API.GoogleTranslate(ans,{
    "to": "zh-cn",
    "domain": "com"
  });
  return JSON.stringify({
    en: ans,
    cn: ans_cn.text
  })
}
export default WolframAlpha;
