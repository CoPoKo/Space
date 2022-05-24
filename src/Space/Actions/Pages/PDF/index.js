import Space from "../../../Space"

async function PDF(that) {
  let FetchURL="https://cdn.jsdelivr.net/npm/imbox@0.0.11/pdf.js/web/static.html"
  let ans = await Space.Helpers.Fetch.Text(FetchURL)
  return new Response(ans, Space.Helpers.Headers.html)
}
export default PDF;
