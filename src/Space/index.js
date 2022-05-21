import Space from "./Space";
async function handleSpace(event) {
  try {
    let router = new Space.helpers.Router(event);
    // 以下非鉴权路由
    /////////////////////////////////////////////////////////////////////
    router.get("/robots.txt").action(Space.actions.Robots);
    router.get("/"+START).action(Space.actions.Auth.AuthPage);
    router.post("/space/auth").action(Space.actions.Auth.CheckAuth);
    /////////////////////////////////////////////////////////////////////
    // 以上非鉴权路由
    // Cookie 鉴权
    if (!router.status.action) {
      let res = await Space.actions.Auth.CheckCookieAuth(event);
      if (res != "PASS") {
        return res;
      } else {
        router.setStatus("auth", 1);
      }
    }
    // 以下鉴权路由
    /////////////////////////////////////////////////////////////////////
    // dashboard
    const { dash_nav } = require("./renderers/pages/dash/dash_nav.js");
    dash_nav.forEach(e => {
      router.get("/space/dash/"+e).action(Space.actions.Dash[e]);
    });
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
      return await Space.helpers.ErrorResponse("Ooops...");
    }
  } catch (error) {
    return await Space.helpers.ErrorResponse(error);
  }
}
export default handleSpace;
