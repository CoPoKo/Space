import Space from "../../Space"

async function Hitokoto() {
  const FetchUrl = "https://cdn.jsdelivr.net/gh/sy-records/hitokoto@master/hitokoto.txt"
  const ans = (await Space.Helpers.Fetch.Text(FetchUrl)).split("\n")
  const hitokoto = ans[Space.Helpers.RandomNum(0, ans.length - 1)]
  return hitokoto
}
export default Hitokoto;