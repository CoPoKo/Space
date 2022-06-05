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
import bot from './TelegrafBot'
import Space from './Space'
import Setting from './Helpers/Setting';

async function handleScheduled(event: ScheduledEvent) {
  const Hours = UTC8Hours(new Date(event.scheduledTime).getHours())
  const Minutes = new Date(event.scheduledTime).getMinutes()

  if (Hours == 2 && Minutes == 0) {
    await Space.API.CF.createRoute();
    await Space.API.CF.setSecurityLevel("essentially_off")
  }
  if (Hours == 6 && Minutes == 0) {
    const set = await Setting("TelegrafBot")
    const PUBLIC_GROUP_ID = set.PUBLIC_GROUP_ID
    const ans = await Space.API.BingImgInfo();
    await bot.telegram.sendPhoto(PUBLIC_GROUP_ID, ans.url, { "caption": ans.copyright });
  }
  if (Hours == 7 && Minutes == 0) {
    await Space.Helpers.RSS.update();
  }
}

function UTC8Hours(Hours: number) {
  let UTC8Hours = Hours + 8
  if (UTC8Hours > 24) {
    UTC8Hours = UTC8Hours - 24
  }
  return UTC8Hours
}

export default handleScheduled;
