import Space from "../../Space"

async function Soul() {
  const FetchUrl = "https://cdn.jsdelivr.net/gh/wwcxjun/soul@master/soul.json"
  const ans = await Space.Helpers.Fetch.JSON(FetchUrl)
  const soul = ans[Space.Helpers.RandomNum(0, ans.length - 1)].content
  return soul
}
export default Soul;
