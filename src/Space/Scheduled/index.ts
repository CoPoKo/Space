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

import Actions from './Actions';

const schedules = require("./schedule.yml").default;

function UTC8Hours(Hours: number): number {
  let UTC8Hours = Hours + 8
  if (UTC8Hours > 24) {
    UTC8Hours = UTC8Hours - 24
  }
  return UTC8Hours
}

export default async function (event: ScheduledEvent): Promise<void> {
  const Hours = UTC8Hours(new Date(event.scheduledTime).getHours())
  const Minutes = new Date(event.scheduledTime).getMinutes()

  for await (const schedule of schedules) {
    const time = schedule.time;
    const action = schedule.action;
    const scheduleHour = parseInt(time.split(":")[0]);
    const scheduleMinute = parseInt(time.split(":")[1]);

    if (Hours == scheduleHour && Minutes == scheduleMinute) {
      await Actions[action](schedule.option);
    }
  }
}