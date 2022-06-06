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

import Router from "../../../Helpers/Router";
import Space from "../../../Space"

async function Notify(ctx: Router) {
  if (ctx.method == "GET") {
    const data = await Space.API.Notify.Get()
    return new Response(JSON.stringify(data))
  }
  if (ctx.method == "POST") {
    const body = await Space.Helpers.ReadRequest.Body(ctx.request)
    const data = JSON.parse(body)
    const action = data.action
    if (action == "delete") {
      const id = data.id
      const n = await Space.API.Notify.Delete(id)
      return new Response(JSON.stringify(n))
    }

  }
}
export default Notify;
