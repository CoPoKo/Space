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
import Space from "../../Space";

async function Success(title: string, content: string) {
  const notify = new Space.API.Notify.SpaceNotify("success", title, content);
  await Space.API.Notify.Put(notify)
}
async function Warning(title: string, content: string) {
  const notify = new Space.API.Notify.SpaceNotify("warning", title, content);
  await Space.API.Notify.Put(notify)
}
async function Danger(title: string, content: string) {
  const notify = new Space.API.Notify.SpaceNotify("danger", title, content);
  await Space.API.Notify.Put(notify)
}
async function Primary(title: string, content: string) {
  const notify = new Space.API.Notify.SpaceNotify("primary", title, content);
  await Space.API.Notify.Put(notify)
}

export default {
  Success,
  Warning,
  Danger,
  Primary,
};