import Space from "../../../Space"

async function PDF() {
  const FetchURL = "https://cdn.jsdelivr.net/npm/imbox@0.0.11/pdf.js/web/static.html"
  const ans = await Space.Helpers.Fetch.Text(FetchURL)
  return new Response(ans, Space.Helpers.Headers.html)
}
export default PDF;
