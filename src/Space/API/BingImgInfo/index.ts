import Space from "../../Space"

const BingImgInfo: (day?: number | string) => Promise<any> = async (day = 0) => {
  const FetchUrl = "https://www.bing.com/HPImageArchive.aspx?format=js&idx=" + day + "&n=1"
  return await Space.Helpers.Fetch.JSON(FetchUrl).then((e: any) => {
    const BingImgInfo = e.images[0]
    BingImgInfo.url = "https://www.bing.com" + BingImgInfo.url
    BingImgInfo.urlbase = "https://www.bing.com" + BingImgInfo.urlbase
    BingImgInfo.quiz = "https://www.bing.com" + BingImgInfo.quiz
    return BingImgInfo
  })
}
export default BingImgInfo;
