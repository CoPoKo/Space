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
    router.get(AUTH_PAGE).action(Space.Actions.Auth.AuthPage);
    router.post("/space/auth").action(Space.Actions.Auth.CheckAuth);
    // 安全跳转
    router.get("/link").action(Space.Actions.Link);
    // Telegraf Webhook
    router.post(Telegraf_BOT_WEBHOOK).action(Space.Actions.TelegrafWebhook);
    /////////////////////////////////////////////////////////////////////
    // OPEN Pages
    router.get("/github-event").action(Space.Actions.Pages.GithubEvent);
    router.get("/pdf").action(Space.Actions.Pages.PDF);
    router.get("/color").action(Space.Actions.Pages.Color);
    // OPEN API
    router.get("/bing").action(Space.Actions.API.BingImgInfo);
    router.get("/sitich").action(Space.Actions.API.Sitich);
    router.get("/soul").action(Space.Actions.API.Soul);
    router.get("/hitokoto").action(Space.Actions.API.Hitokoto);
    router.get("/unsplash").action(Space.Actions.API.Unsplash);
    router.get("/acg").action(Space.Actions.API.ACG);
    router.get("/niubi").action(Space.Actions.API.Niubi);
    router.get("/ip").action(Space.Actions.API.IP);
    router.get("/decrypt").action(Space.Actions.API.DecryptMd5);
    router.get("/zh").action(Space.Actions.API.ZH);
    router.get("/person").action(Space.Actions.API.thispersondoesnotexist);
    router.get("/waifu").action(Space.Actions.API.thiswaifudoesnotexist);
    router.get("/anime").action(Space.Actions.API.thisanimedoesnotexist);
    router.get("/poet").action(Space.Actions.API.Poet);
    router.get("/happypic").action(Space.Actions.API.Happypic);
    router.get("/dns").action(Space.Actions.API.DNSQuery);
    router.get("/thum").action(Space.Actions.API.Thum);
    /////////////////////////////////////////////////////////////////////
    // Header Auth
    router.get("/Admin").action(Space.Actions.Admin);
    /////////////////////////////////////////////////////////////////////
    // 以上非 Cookie 鉴权路由
    // Cookie 鉴权
    if (!router.status.action) {
      let res = await Space.Actions.Auth.CheckCookieAuth(event);
      if (res != "PASS") {
        return res;
      } else {
        router.setStatus("auth", 1);
      }
    }
    // 以下 Cookie 鉴权路由
    /////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////
    // dashboard
    const { dash_nav } = require("./Renderers/Pages/dash/dash_nav.js");
    dash_nav.forEach(e => {
      router.get("/space/dash/" + e).action(Space.Actions.Dash[e]);
    });
    /////////////////////////////////////////////////////////////////////
    // api
    /////////////////////////////////////////////////////////////////////
    router.post("/space/api/kv/get").action(Space.Actions.API.KV.Get);
    router.post("/space/api/kv/put").action(Space.Actions.API.KV.Put);
    router.post("/space/api/kv/delete").action(Space.Actions.API.KV.Delete);
    router.get("/space/api/GoogleTranslate").action(Space.Actions.API.GoogleTranslate);
    router.get("/space/api/GoogleSearch").action(Space.Actions.API.GoogleSearch);
    router.get("/space/api/WolframAlpha").action(Space.Actions.API.WolframAlpha);
    router.post("/space/api/NPMUpload").action(Space.Actions.API.NPMUpload);
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
