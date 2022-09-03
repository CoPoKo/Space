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

const NPMUpload = async (that: HandleMessage): Promise<void> => {
  let NPMUploadStatus = "stop";
  const ctx = that.ctx
  const k = that?.args?.k
  if (k == "start") {
    NPMUploadStatus = "start"
    await Space.API.KV.Put("NPMUploadStatus", NPMUploadStatus)
    await ctx.reply(`Upload to NPM package is started.`)
  } else if (k == "stop") {
    NPMUploadStatus = "stop"
    await Space.API.KV.Put("NPMUploadStatus", NPMUploadStatus)
    await ctx.reply(`Upload to NPM package is stoped.`)
  } else if (that.file) {
    NPMUploadStatus = await Space.API.KV.Get("NPMUploadStatus");
    if (NPMUploadStatus == "start") {
      const file_id = that.file_id
      await ctx.reply(`Uploading...`)
      if (file_id) {
        const file_link = await ctx.telegram.getFileLink(file_id)
        const file_name = file_link.href.split("/").pop()
        const file_blob = await fetch(file_link.href).then(res => res.blob())
        const file_mime_type = that.file_mime_type || "application/octet-stream"
        const file = new File([file_blob], file_name, { type: file_mime_type })
        const ans = await Space.API.NPMUpload(file)
        if (ans.status.toString().startsWith("20")) {
          await ctx.reply(ans.body.replace(/<br\/>/g, "\n"), { parse_mode: "HTML" })
        } else {
          await ctx.reply(`Uploading Failed!\n${ans.body}`)
        }
      }
    }
  }
};

export default NPMUpload;
