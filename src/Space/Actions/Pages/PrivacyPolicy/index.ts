import Router from "../../../Helpers/Router";
import Space from "../../../Space"

async function PrivacyPolicy(ctx: Router) {
  const path = ctx.pathname
  if (path.startsWith('/apisource')) {
    return Response.redirect(`https://github.com/CoPoKo/Space`, 301)
  }
  const set = await Space.Helpers.Setting("GitHub");
  const GITHUBTOKEN = set.GITHUBTOKEN;
  if (path.startsWith('/privacy-policy')) {
    if (path.startsWith('/privacy-policy/privacy-policy.md')) {
      const page = await fetch("https://raw.githubusercontent.com/MHuiG/profile-private/master/privacy-policy/privacy-policy.md", {
        headers: {
          Accept: "application/vnd.github.v3.raw",
          Authorization: "token " + GITHUBTOKEN
        }
      }).then(res => res.text())
      return new Response(page, Space.Helpers.Headers.html);
    }
    const page = await fetch("https://raw.githubusercontent.com/MHuiG/profile-private/master/privacy-policy/index.html", {
      headers: {
        Accept: "application/vnd.github.v3.raw",
        Authorization: "token " + GITHUBTOKEN
      }
    }).then(res => res.text())
    return new Response(page, Space.Helpers.Headers.html);
  }
  if (path.startsWith('/contact')) {
    const page = await fetch("https://raw.githubusercontent.com/MHuiG/profile-private/master/contact/index.html", {
      headers: {
        Accept: "application/vnd.github.v3.raw",
        Authorization: "token " + GITHUBTOKEN
      }
    }).then(res => res.text())
    return new Response(page, Space.Helpers.Headers.html);
  }
}
export default PrivacyPolicy;
