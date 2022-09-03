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
import SpaceNotifyContext from "../../../types/SpaceNotifyContext";
import Space from "../../Space"

class SpaceNotify {
  type: string;
  title: string;
  content: string;
  id: string;
  time: string;
  constructor(type: string, title: string, content: string) {
    this.type = type;
    this.title = title;
    this.content = content;
    this.id = Space.Helpers.UUID();
    this.time = new Date().toISOString();
  }
  toJSON(): { type: string; title: string; content: string; time: string; id: string; } {
    return {
      type: this.type,
      title: this.title,
      content: this.content,
      time: this.time,
      id: this.id
    }
  }
  fromJSON(json: any): void {
    this.type = json.type;
    this.title = json.title;
    this.content = json.content;
    this.time = json.time;
    this.id = json.id;
  }
}
async function Get(): Promise<any> {
  let data = await Space.API.KV.Get("SpaceNotify").then(JSON.parse);
  if (!data) {
    data = []
  }
  return data
}
async function Put(Notify: SpaceNotify): Promise<any> {
  const data = await Get()
  data.push(Notify.toJSON())
  await Space.API.KV.Put("SpaceNotify", JSON.stringify(data))
  return data
}
async function Delete(id: string): Promise<any> {
  const data = await Get()
  const index = data.findIndex((item: SpaceNotifyContext) => item.id === id)
  if (index !== -1) {
    data.splice(index, 1)
    await Space.API.KV.Put("SpaceNotify", JSON.stringify(data))
  }
  return data
}
async function Update(id: string, Notify: SpaceNotify): Promise<any> {
  const data = await Get()
  const index = data.findIndex((item: SpaceNotifyContext) => item.id === id)
  if (index !== -1) {
    data[index] = Notify.toJSON()
    await Space.API.KV.Put("SpaceNotify", JSON.stringify(data))
  }
  return data
}

export default {
  Get,
  Put,
  Delete,
  Update,
  SpaceNotify,
};

