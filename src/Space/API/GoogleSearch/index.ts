import Space from "../../Space"

async function GoogleSearch(question: string) {
  const set = await Space.Helpers.Setting("GoogleSearch");
  const KEY = set.KEY;
  const CX = set.CX;
  const FetchURL_Google_ALL = "https://www.googleapis.com/customsearch/v1?key=" + KEY + "&cx=" + CX + "&start=0&q=" + question
  const ans = await Space.Helpers.Fetch.JSON(FetchURL_Google_ALL)
  return ans
}
export default GoogleSearch;
