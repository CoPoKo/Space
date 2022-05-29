import Space from "../../Space"

async function GoogleSearch(question: string) {
  const set = await Space.Helpers.Setting("GoogleSearch");
  const KEY = set.KEY;
  const CX = set.CX;
  const FetchURL_Google_ALL = "https://www.googleapis.com/customsearch/v1?key=" + KEY + "&cx=" + CX + "&start=0&q=" + question
  const ans: any = await Space.Helpers.Fetch.JSON(FetchURL_Google_ALL)
  return JSON.stringify({ ans: ans.items })
}
export default GoogleSearch;
