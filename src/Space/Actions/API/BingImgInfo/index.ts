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
import Router from "../../../Helpers/Router"
import Space from "../../../Space"

async function BingImgInfo(ctx: Router): Promise<Response> {
  const path = ctx.pathname
  const day = ctx.getParam("day")
  const ans = await Space.API.BingImgInfo(day)

  if (path.startsWith('/bing/info')) {
    return new Response(JSON.stringify(ans), Space.Helpers.Headers.json)
  }
  if (path.startsWith('/bing/copyright')) {
    if (path.startsWith('/bing/copyright/w')) {
      return new Response("document.write(" + JSON.stringify(ans.copyright) + ")", Space.Helpers.Headers.json)
    }
    return new Response(JSON.stringify({ "copyright": ans.copyright }), Space.Helpers.Headers.json)
  }
  return fetch(ans.url)
}
export default BingImgInfo;
