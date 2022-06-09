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
import HoleContext from "../../../../types/HoleContext";
import Router from "../../../Helpers/Router";
import Space from "../../../Space"

async function Hole(ctx: Router) {
  const path = ctx.pathname
  if (path.startsWith("/space/api/Hole")) {
    if (ctx.method === "GET") {
      const data = await Space.API.Hole.GetHole();
      return new Response(JSON.stringify(data));
    } else if (ctx.method === "POST") {
      const data: any = await ctx.request.json();
      if (path.startsWith("/space/api/Hole/Put")) {
        const hole = await Space.API.Hole.PutHole(data);
        return new Response(JSON.stringify({ success: 1, hole: hole }));
      }
      if (path.startsWith("/space/api/Hole/Delete")) {
        const hole = await Space.API.Hole.DeleteHole(data.id);
        return new Response(JSON.stringify({ success: 1, hole: hole }));
      }
      if (path.startsWith("/space/api/Hole/Edit")) {
        const hole = await Space.API.Hole.EditHole(data.id, data.hole);
        return new Response(JSON.stringify({ success: 1, hole: hole }));
      }
      if (path.startsWith("/space/api/Hole/Visible")) {
        const hole = await Space.API.Hole.VisibleHole(data.id);
        return new Response(JSON.stringify({ success: 1, hole: hole }));
      }
    }
  }
  if (path.startsWith("/hpp/api/gethpptalk")) {
    const data = await Space.API.Hole.GetHole();
    data.forEach((hole: HoleContext) => {
      if (!hole.visible) {
        data.splice(data.indexOf(hole), 1);
      }
    })
    return new Response(JSON.stringify(data), Space.Helpers.Headers.json);
  }
}
export default Hole;
