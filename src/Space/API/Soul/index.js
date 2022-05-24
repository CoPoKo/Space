import Space from "../../Space"

async function Soul() {
  let FetchUrl = "https://cdn.jsdelivr.net/gh/wwcxjun/soul@master/soul.json"
  let ans = await Space.Helpers.Fetch.JSON(FetchUrl)
  let soul = ans[Space.Helpers.RandomNum(0, ans.length - 1)].content
  return soul
}
export default Soul;
