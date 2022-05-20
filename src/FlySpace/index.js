import FlySpace from "./FlySpace";
async function handleFlySpace(event) {
  try {
    let router = new FlySpace.helpers.Router(event);
    // 以下非鉴权路由
    /////////////////////////////////////////////////////////////////////
    router.get("/robots.txt").action(FlySpace.actions.Robots);
    router.get("/12138").action(FlySpace.actions.Auth.AuthPage);
    router.post("/flyspace/auth").action(FlySpace.actions.Auth.CheckAuth);
    /////////////////////////////////////////////////////////////////////
    // 以上非鉴权路由
    // Cookie 鉴权
    if (!router.status.action) {
      let res = await FlySpace.actions.Auth.CheckCookieAuth(event);
      if (res != "PASS") {
        return res;
      } else {
        router.setStatus("auth", 1);
      }
    }
    // 以下鉴权路由
    /////////////////////////////////////////////////////////////////////
    router.get("/flyspace/dash").action(FlySpace.actions.Dash.PageDashIndex);
    /////////////////////////////////////////////////////////////////////
    // 启动 action
    if (router.status.action) {
      return await router.run();
    } else {
      if (router.status.auth) {
        if (
          event.request.url !=
          `https://${event.request.url.split("/")[2]}/flyspace/dash`
        ) {
          return Response.redirect(
            `https://${event.request.url.split("/")[2]}/flyspace/dash`,
            302
          );
        }
      }
      return await FlySpace.helpers.ErrorResponse("Ooops...");
    }
  } catch (error) {
    return await FlySpace.helpers.ErrorResponse(error);
  }
}
export default handleFlySpace;
