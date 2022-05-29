import Space from "../../Space"

async function NPMUpload(file) {
  const fileBuffer = await file.arrayBuffer()
  const fileName = await file.name
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
  }).then(e => {
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
