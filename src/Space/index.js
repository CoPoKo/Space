import Space from "./Space";
async function handleSpace(event) {
  try {
    /////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////
    // 安全检查
    let checkRefererStatus = Space.Helpers.Security.checkReferer(event);
    if (!checkRefererStatus) {
      return await Space.Helpers.ErrorResponse("Ooops...", 403);
    }
    /////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////
    let router = new Space.Helpers.Router(event);
    // 以下非鉴权路由
    /////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////
    router.get("/favicon.ico").action(Space.Actions.Favicon);
    router.get("/robots.txt").action(Space.Actions.Robots);
    router.get("/" + START).action(Space.Actions.Auth.AuthPage);
    router.post("/space/auth").action(Space.Actions.Auth.CheckAuth);
    // 安全跳转
    router.get("/link").action(Space.Actions.Link);
    /////////////////////////////////////////////////////////////////////
    // OPEN Pages
    router.get("/github-event").action(Space.Actions.Pages.GithubEvent);
    // OPEN API
    router.get("/bing").action(Space.Actions.API.BingImgInfo);
    router.get("/sitich").action(Space.Actions.API.Sitich);
    router.get("/soul").action(Space.Actions.API.Soul);
    router.get("/hitokoto").action(Space.Actions.API.Hitokoto);
    /////////////////////////////////////////////////////////////////////
    // 以上非鉴权路由
    // Cookie 鉴权
    if (!router.status.action) {
      let res = await Space.Actions.Auth.CheckCookieAuth(event);
      if (res != "PASS") {
        return res;
      } else {
        router.setStatus("auth", 1);
      }
    }
    // 以下鉴权路由
    /////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////
    // dashboard
    const { dash_nav } = require("./renderers/pages/dash/dash_nav.js");
    dash_nav.forEach(e => {
      router.get("/space/dash/" + e).action(Space.Actions.Dash[e]);
    });
    /////////////////////////////////////////////////////////////////////
    // api
    /////////////////////////////////////////////////////////////////////
    // kv
    router.post("/space/api/kv/get").action(Space.Actions.API.KV.Get);
    router.post("/space/api/kv/put").action(Space.Actions.API.KV.Put);
    router.post("/space/api/kv/delete").action(Space.Actions.API.KV.Delete);
    // Google Translate
    router.get("/space/api/GoogleTranslate").action(Space.Actions.API.GoogleTranslate);
    // Google Search
    router.get("/space/api/GoogleSearch").action(Space.Actions.API.GoogleSearch);
    // WolframAlpha
    router.get("/space/api/WolframAlpha").action(Space.Actions.API.WolframAlpha);
    /////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////
    // 启动 action
    if (router.status.action) {
      return await router.run();
    } else {
      if (router.status.auth) {
        if (
          event.request.url !=
          `https://${event.request.url.split("/")[2]}/space/dash/home`
        ) {
          return Response.redirect(
            `https://${event.request.url.split("/")[2]}/space/dash/home`,
            302
          );
        }
      }
      return await Space.Helpers.ErrorResponse("Ooops...", 403);
    }
  } catch (error) {
    return await Space.Helpers.ErrorResponse(error, 500);
  }
}
export default handleSpace;
