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
async function Nbnhhsh(key: string) {
  if (!key)
    key = "nb"

  const res = await fetch(new Request("https://lab.magiconch.com/api/nbnhhsh/guess", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({ text: key }),
  }));
  const data: any = await res.json()
  const ans = []
  if (data.length) {
    data.forEach((result: any) => {
      let content = `${result.name} 理解不能`;
      if (result.trans && result.trans.length > 0) {
        content = `${result.name} 的含义：${result.trans.join(",")}`;
      } else if (result.inputting && result.inputting.length > 0) {
        content = `${result.name} 有可能是：${result.inputting.join(
          ","
        )}`;
      }
      ans.push(content);
    });
  }
  return ans.join("\n");
}
export default Nbnhhsh;
