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
import handleSpace from "./Space";
import handleScheduled from "./Space/Scheduled";

addEventListener("fetch", (event: FetchEvent): void => {
  event.respondWith(
    handleSpace(event).catch((err: { stack: BodyInit; }) => new Response(err.stack, { status: 500 }))
  );
});

addEventListener('scheduled', (event: ScheduledEvent): void => {
  event.waitUntil(handleScheduled(event))
})
