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

async function GetJTPYStr(): Promise<string> {
  const FetchURL = "https://cdn.jsdelivr.net/gh/MHG-LAB/ChineseUtils@main/JTPY.txt";
  const str = await Space.Helpers.Fetch.Text(FetchURL)
  return str;
}
async function GetFTPYStr(): Promise<string> {
  const FetchURL = "https://cdn.jsdelivr.net/gh/MHG-LAB/ChineseUtils@main/FTPY.txt";
  const str = await Space.Helpers.Fetch.Text(FetchURL)
  return str;
}
// 简=>繁
async function Traditionalized(cc: string): Promise<string> {
  let str = '';
  const JTPYStr = await GetJTPYStr()
  const FTPYStr = await GetFTPYStr()
  for (let i = 0; i < cc.length; i++) {
    if (JTPYStr.indexOf(cc.charAt(i)) != -1)
      str += FTPYStr.charAt(JTPYStr.indexOf(cc.charAt(i)));
    else
      str += cc.charAt(i);
  }
  return str;
}
// 繁=>简
async function Simplized(cc: string): Promise<string> {
  let str = '';
  const JTPYStr = await GetJTPYStr()
  const FTPYStr = await GetFTPYStr()
  for (let i = 0; i < cc.length; i++) {
    if (FTPYStr.indexOf(cc.charAt(i)) != -1)
      str += JTPYStr.charAt(FTPYStr.indexOf(cc.charAt(i)));
    else
      str += cc.charAt(i);
  }
  return str;
}
export default {
  Simplized,
  Traditionalized,
}
