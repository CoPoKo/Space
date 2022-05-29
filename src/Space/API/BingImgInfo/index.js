import Space from "../../Space"

async function BingImgInfo(day) {
  if (!day)
    day = 0
  const FetchUrl = "https://www.bing.com/HPImageArchive.aspx?format=js&idx=" + day + "&n=1"
  const ans = await Space.Helpers.Fetch.JSON(FetchUrl)
  const BingImgInfo = ans.images[0]
  BingImgInfo.url = "https://www.bing.com" + BingImgInfo.url
  BingImgInfo.urlbase = "https://www.bing.com" + BingImgInfo.urlbase
  BingImgInfo.quiz = "https://www.bing.com" + BingImgInfo.quiz
  return BingImgInfo
}
export default BingImgInfo;
