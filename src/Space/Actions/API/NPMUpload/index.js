import Space from "../../../Space"

async function NPMUpload(ctx) {
  const set = await Space.Helpers.Setting("GitHub");
  const BOT_TOKEN = set.BOT_TOKEN;
  const path = ctx.pathname
  const message = Date.now()
  const file = await ctx.request.text()
  const filename = path.substr(("/space/api/NPMUpload/").length)
  const url = `https://api.github.com/repos/MHG-LAB/git2npm/contents/${filename}?ref=main`
  const f_sha = await fetch(url, {
    method: "GET",
    headers: {
      "content-type": "application/json;charset=UTF-8",
      "user-agent": "copoko.npm.git/0.0.1",
      "Authorization": "token " + BOT_TOKEN
    },
  }).then(e => {
    return e.text()
  }).then(e => {
    return (JSON.parse(e)).sha
  })

  const r = await fetch(url, {
    body: JSON.stringify({
      branch: "main", message: `Update:` + message, content: file, sha: f_sha
    }),
    method: "PUT",
    headers: {
      "content-type": "application/json;charset=UTF-8",
      "user-agent": "copoko.npm.git/0.0.1",
      "Authorization": "token " + BOT_TOKEN
    }
  })
  return new Response(await r.text(), { status: r.status })
}
export default NPMUpload;
