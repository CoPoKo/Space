import Space from "../../Space"

async function Hitokoto() {
  let FetchUrl = "https://cdn.jsdelivr.net/gh/sy-records/hitokoto@master/hitokoto.txt"
  let ans = (await Space.Helpers.Fetch.Text(FetchUrl)).split("\n")
  let hitokoto = ans[Space.Helpers.RandomNum(0, ans.length - 1)]
  return hitokoto
}
export default Hitokoto;
