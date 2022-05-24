import Space from "../../../Space"

async function GithubEvent(that) {
  let FetchURL="https://cdn.jsdelivr.net/gh/MHG-LAB/pages@main/github-events/index.html"
  let ans = await Space.Helpers.Fetch.Text(FetchURL)
  return new Response(ans, Space.Helpers.Headers.html)
}
export default GithubEvent;
