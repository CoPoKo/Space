import Space from "../../../Space"

async function Color(ctx) {
  let FetchURL = "https://cdn.jsdelivr.net/gh/MHG-LAB/pages@2/color/index.html"
  let ans = await Space.Helpers.Fetch.Text(FetchURL)
  return new Response(ans, Space.Helpers.Headers.html)
}
export default Color;
