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

async function Calendar(ctx: Router) {
  const path = ctx.pathname
  if (ctx.method == "GET") {
    if (path.startsWith("/space/api/calendar/EventSource")) {
      const data = await Space.API.Calendar.GetCalendarEventSource();
      return new Response(JSON.stringify(data))
    }
    if (path.startsWith("/space/api/calendar/DraggableEvent")) {
      const data = await Space.API.Calendar.GetCalendarDraggableEvent();
      return new Response(JSON.stringify(data))
    }
  }
  if (ctx.method == "POST") {
    const body: any = await ctx.request.json()
    if (path.startsWith("/space/api/calendar/EventSource")) {
      await Space.API.Calendar.PutCalendarEventSource(body);
      return new Response(JSON.stringify({ success: 1, data: body }))
    }
    if (path.startsWith("/space/api/calendar/DraggableEvent")) {
      await Space.API.Calendar.PutCalendarDraggableEvent(body);
      return new Response(JSON.stringify({ success: 1, data: body }))
    }
  }
}
export default Calendar;
