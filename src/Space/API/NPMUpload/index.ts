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

async function NPMUpload(file: any) {
  const fileBuffer = await file.arrayBuffer()
  const fileName = file.name
  const fileBase64 = Buffer.from(fileBuffer).toString('base64')

  const set = await Space.Helpers.Setting("NPMUpload");
  const GITHUB_TOKEN = set.GITHUB_TOKEN;
  const GITHUB_REPO = set.GITHUB_REPO;
  const GITHUB_BRANCH = set.GITHUB_BRANCH;
  const NPM_PKG = set.NPM_PKG;
  const message = Date.now()
  const url = `https://api.github.com/repos/${GITHUB_REPO}/contents/${fileName}?ref=${GITHUB_BRANCH}`
  const fileSha = await fetch(url, {
    method: "GET",
    headers: {
      "content-type": "application/json;charset=UTF-8",
      "user-agent": "copoko.npm.git/0.0.1",
      "Authorization": "token " + GITHUB_TOKEN
    },
  }).then(e => {
    return e.json()
  }).then((e: any) => {
    return e.sha
  })

  const r = await fetch(url, {
    body: JSON.stringify({
      branch: GITHUB_BRANCH, message: `Update:` + message, content: fileBase64, sha: fileSha
    }),
    method: "PUT",
    headers: {
      "content-type": "application/json;charset=UTF-8",
      "user-agent": "copoko.npm.git/0.0.1",
      "Authorization": "token " + GITHUB_TOKEN
    }
  })
  const p = {
    status: r.status,
    body: await r.text()
  }
  if (p.status.toString().startsWith("20")) { // success 200 201
    const data = JSON.parse(p.body);
    const s = `/${NPM_PKG}@0.0.${data.commit.message.replace("Update:", "")}/${data.content.name}`;
    const ss = `https://fastly.jsdelivr.net/npm${s}<br/>https://unpkg.com${s}`
    return {
      status: p.status,
      body: ss
    }
  }
  // error
  return p
}
export default NPMUpload;
