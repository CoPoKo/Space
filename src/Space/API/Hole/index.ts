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
import HoleContext from "../../../types/HoleContext";
import Space from "../../Space"

class Hole {
  id: string;
  avatar: string;
  content: string;
  name: string;
  time: string;
  visible: boolean;
  like: number;
  constructor(hole: HoleContext) {
    this.id = hole.id;
    this.avatar = hole.avatar;
    this.content = hole.content;
    this.name = hole.name;
    this.time = hole.time;
    this.visible = hole.visible;
    this.like = hole.like;
  }

  async init(): Promise<{ id: string; avatar: string; content: string; name: string; time: string; visible: boolean; like: number; }> {
    const set = await Space.Helpers.Setting("Hole");
    this.name = set.name;
    this.avatar = set.avatar;
    this.id = Space.Helpers.UUID();
    return this.toJSON();
  }

  toJSON(): { id: string; avatar: string; content: string; name: string; time: string; visible: boolean; like: number; } {
    return {
      id: this.id,
      avatar: this.avatar,
      content: this.content,
      name: this.name,
      time: this.time,
      visible: this.visible,
      like: this.like
    }
  }
  fromJSON(json: HoleContext): void {
    if (json.id)
      this.id = json.id;
    if (json.avatar)
      this.avatar = json.avatar;
    if (json.content)
      this.content = json.content;
    if (json.name)
      this.name = json.name;
    if (json.time)
      this.time = json.time;
    if (json.visible)
      this.visible = json.visible;
    if (json.like)
      this.like = json.like;
  }
}

async function GetHole(): Promise<any> {
  const data = await Space.API.KV.Get("Hole");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
}
async function PutHole(hole: any): Promise<any> {
  const data = await GetHole()
  const item = await new Hole(hole).init();
  data.push(item)
  await Space.API.KV.Put("Hole", JSON.stringify(data));
  return data;
}
async function DeleteHole(id: string): Promise<any> {
  const data = await GetHole()
  const item = data.find((item: { id: string; }) => item.id === id)
  if (item) {
    data.splice(data.indexOf(item), 1)
    await Space.API.KV.Put("Hole", JSON.stringify(data));
  }
  return data;
}
async function EditHole(id: string, hole: any): Promise<any> {
  const data = await GetHole()
  const item = data.find((item: { id: string; }) => item.id === id)
  if (item) {
    const it = new Hole(item);
    it.fromJSON(hole)
    data.splice(data.indexOf(item), 1, it.toJSON())
    await Space.API.KV.Put("Hole", JSON.stringify(data));
  }
  return data;
}
async function VisibleHole(id: string): Promise<any> {
  const data = await GetHole()
  const item = data.find((item: { id: string; }) => item.id === id)
  if (item) {
    item.visible = !item.visible
    await Space.API.KV.Put("Hole", JSON.stringify(data));
  }
  return data;
}
export default {
  GetHole,
  PutHole,
  DeleteHole,
  EditHole,
  VisibleHole,
};
