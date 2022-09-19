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

const Get = async (key: string, pass: string): Promise<string> => {
  const set = await Space.Helpers.Setting("NPMUpload");
  const NPM_PKG = set.NPM_PKG;
  const r = await fetch(`https://unpkg.com/${NPM_PKG}@0.0.${key}/data.js`);
  if (r.status !== 200) {
    return null;
  }
  const s = await r.text();
  return Space.API.AES.Decrypt(s, pass);
}
const Put = async (s: string, pass: string, time?: number): Promise<string> => {
  const info = await Space.API.NPMUpload(Space.API.AES.Encrypt(s, pass), time)
  if (info.success)
    return info.key;
  return null;
}
export default {
  Get,
  Put,
};
