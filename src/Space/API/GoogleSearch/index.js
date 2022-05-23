import Space from "../../Space"

async function GoogleSearch(question){
  let set = await Space.Helpers.Setting("GoogleSearch");
  let KEY = set.KEY;
  let CX = set.CX;
  let FetchURL_Google_ALL = "https://www.googleapis.com/customsearch/v1?key="+KEY+"&cx="+CX+"&start=0&q="+question
  let ans= await Space.Helpers.Fetch.JSON(FetchURL_Google_ALL)
  return JSON.stringify({ans:ans.items})
}
export default GoogleSearch;
