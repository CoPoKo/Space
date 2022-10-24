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

import bot from '../../../TelegrafBot'
import Space from './../../../Space'
import Setting from '../../../Helpers/Setting';

export default async function (): Promise<void> {
  // const set = await Setting("TelegrafBot");
  // const PUBLIC_GROUP_ID = set.PUBLIC_GROUP_ID;
  // console.log(PUBLIC_GROUP_ID);

  const groups = [
    -1001480715278, // mine
    -1001197660745, // vlts
  ]

  const ans = await Space.API.BingImgInfo();
  groups.forEach(g => {
    bot.telegram.sendPhoto(g, ans.url, { "caption": ans.copyright });
  })
}


