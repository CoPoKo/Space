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

async function HappypicSex(): Promise<string> {
  return "https://cdn.jsdelivr.net/npm/chenyfan-happypic-sex@0.0." + Space.Helpers.RandomNum(1, 19) + "/" + Space.Helpers.RandomNum(1, 99) + ".jpg"
}

async function SJMM(id?: string | number): Promise<Response> {
  if (!id) {
    id = Space.Helpers.RandomNum(1, 35)
  }
  const set = await Space.Helpers.Setting("GitHub");
  const BOT_TOKEN = set.BOT_TOKEN;
  return fetch("https://raw.githubusercontent.com/MHG-LAB/PRIVATEPIC/master/setu/gif/" + id + ".gif", {
    headers: {
      Accept: "application/vnd.github.v3.raw",
      Authorization: "token " + BOT_TOKEN
    }
  })
}
async function Tui(id?: string | number): Promise<Response> {
  if (!id) {
    id = Space.Helpers.RandomNum(1, 557)
  }
  const set = await Space.Helpers.Setting("GitHub");
  const BOT_TOKEN = set.BOT_TOKEN;
  return fetch("https://raw.githubusercontent.com/MHG-LAB/PRIVATEPIC/master/setu/tui/" + id + ".jpg", {
    headers: {
      Accept: "application/vnd.github.v3.raw",
      Authorization: "token " + BOT_TOKEN
    }
  })
}
async function El(): Promise<any> {
  const FetchUrl = "https://raw.githubusercontent.com/ElpsyCN/el-bot-api/8aa3c64fe7cb715349c14b363ef4c43996c5ef8a/data/setu.json"
  return await Space.Helpers.Fetch.JSON(FetchUrl).then((e: any) => e.image).then((e: any) => e[Space.Helpers.RandomNum(0, e.length - 1)].url)
}

export default {
  HappypicSex,
  SJMM,
  Tui,
  El,
}
