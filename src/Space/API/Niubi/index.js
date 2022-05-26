import Space from "../../Space"

async function Niubi(name) {
  if (!name)
    name = "CoCo"
  let FetchUrl = "https://cdn.jsdelivr.net/gh/ElpsyCN/el-bot-api@master/data/niubi.json"
  let ans = await Space.Helpers.Fetch.JSON(FetchUrl)
  let data = ans[Space.Helpers.RandomNum(0, ans.length - 1)]
  data = data.replace(/\${name}/g, "「" + name + "」")
  return data
}
export default Niubi;
