/*!
 * ==========================================================================
 * "CoPoKo Space" License
 * GNU General Public License version 3.0 (GPLv3)
 * ==========================================================================
 * This file is part of "CoPoKo Space"
 *
 * "CoPoKo Space" is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * "CoPoKo Space" is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with "CoPoKo Space". If not, see <http://www.gnu.org/licenses/>.
 * ==========================================================================
*/
import Space from "../../Space"

const BingImgInfo: (day?: number | string) => Promise<any> = async (day = 0) => {
  const FetchUrl = "https://www.bing.com/HPImageArchive.aspx?format=js&idx=" + day + "&n=1"
  return Space.Helpers.Fetch.JSON(FetchUrl).then((e: any) => {
    const BingImgInfo = e.images[0]
    BingImgInfo.url = "https://www.bing.com" + BingImgInfo.url
    BingImgInfo.urlbase = "https://www.bing.com" + BingImgInfo.urlbase
    BingImgInfo.quiz = "https://www.bing.com" + BingImgInfo.quiz
    return BingImgInfo
  })
}
export default BingImgInfo;
