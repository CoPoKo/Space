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
import Space from "../../../../Space";
import HandleMessage from "../../HandleMessage";

const RSS = async (that: HandleMessage): Promise<void> => {
  const ctx = that.ctx
  if (that.args.k == "list") {
    const sub = await Space.Helpers.RSS.list();
    let text = "";
    for (const i in sub) {
      text += `[${sub[i].title}](${sub[i].url})\n`
    }
    await ctx.reply(text)
  }
  if (that.args.k == "add") {
    try {
      const url = that.args.q
      await Space.Helpers.RSS.add(url);
      await ctx.reply("Add Successfully")
    } catch (error) {
      await ctx.reply("Add failed")
    }
  }
  if (that.args.k == "delete") {
    try {
      const url = that.args.q
      await Space.Helpers.RSS.del(url);
      await ctx.reply("Delete Successfully")
    } catch (error) {
      await ctx.reply("Delete failed")
    }
  }
  if (that.args.k == "update") {
    await ctx.reply("Trying to update...")
    await Space.Helpers.RSS.update();
    await ctx.reply("Update Done.")
  }
  if (that.args.k == "last") {
    await Space.Helpers.RSS.last(that);
  }
};

export default RSS;
