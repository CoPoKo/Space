import Space from "../../../Space"

async function Color(ctx) {
  const FetchURL = "https://cdn.jsdelivr.net/gh/MHG-LAB/pages@2/color/index.html"
  const ans = await Space.Helpers.Fetch.Text(FetchURL)
  return new Response(ans, Space.Helpers.Headers.html)
}
export default Color;
