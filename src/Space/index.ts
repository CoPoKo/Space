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
import Space from "./Space";
const IPTimes = {}
async function handleSpace(event: FetchEvent) {
  try {
    /////////////////////////////////////////////////////////////////////
    // 安全检查
    /////////////////////////////////////////////////////////////////////
    // Analytics
    event.waitUntil(Space.Helpers.Security.securityCheckAnalytics(event));
    // IP-Time-Times
    const request = event.request;
    const ip = request.headers.get("CF-Connecting-IP") || request.headers.get('x-real-ip') || request.headers.get("X-Forwarded-For");
    if (IPTimes[ip] && ((new Date().getTime() - IPTimes[ip].time) / 1000 / 60 / 60 < 0.25) && IPTimes[ip].times >= 300) {
      return await Space.Helpers.ErrorResponse("Too Many Requests", 403);
    }
    if (IPTimes[ip] && ((new Date().getTime() - IPTimes[ip].time) / 1000 / 60 / 60 < 24) && IPTimes[ip].times >= 1000) {
      return await Space.Helpers.ErrorResponse("Too Many Requests", 403);
    }
    IPTimes[ip] = {
      time: new Date().getTime(),
      times: IPTimes[ip]?.times ? IPTimes[ip].times + 1 : 1,
    };
    // Referer
    if (typeof MY_REFERER != "undefined") {
      const checkRefererStatus = Space.Helpers.Security.checkReferer(event);
      if (!checkRefererStatus) {
        return await Space.Helpers.ErrorResponse("Ooops...", 403);
      }
    }
    /////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////
    const router = new Space.Helpers.Router(event);
    // 以下非鉴权路由
    /////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////
    router.get("/favicon.ico").action(Space.Actions.Favicon);
    router.get("/robots.txt").action(Space.Actions.Robots);
    router.get(AUTH_PAGE).action(Space.Actions.Auth.AuthPage);
    router.post("/space/auth" + AUTH_PAGE).action(Space.Actions.Auth.CheckAuth);
    // 安全跳转
    router.get("/link").action(Space.Actions.Link);
    // Telegraf Webhook
    router.post(Telegraf_BOT_WEBHOOK).action(Space.Actions.TelegrafWebhook);
    /////////////////////////////////////////////////////////////////////
    // OPEN Pages
    router.get("/", true).action(Space.Actions.Pages.API);
    router.get("/github-event").action(Space.Actions.Pages.GithubEvent);
    router.get("/pdf").action(Space.Actions.Pages.PDF);
    router.get("/color").action(Space.Actions.Pages.Color);
    router.get("/privacy-policy").action(Space.Actions.Pages.PrivacyPolicy);
    router.get("/contact").action(Space.Actions.Pages.PrivacyPolicy);
    router.get("/apisource").action(Space.Actions.Pages.PrivacyPolicy);
    router.get("/tree-hollow").action(Space.Actions.Pages.TreeHollow);
    router.post("/tree-hollow").action(Space.Actions.Pages.TreeHollow);
    // OPEN API
    router.get("/bing").action(Space.Actions.API.BingImgInfo);
    router.get("/sitich").action(Space.Actions.API.Sitich);
    router.get("/soul").action(Space.Actions.API.Soul);
    router.get("/hitokoto").action(Space.Actions.API.Hitokoto);
    router.get("/unsplash").action(Space.Actions.API.Unsplash);
    router.get("/acg").action(Space.Actions.API.ACG);
    router.get("/niubi").action(Space.Actions.API.Niubi);
    router.get("/ipinfo").action(Space.Actions.API.IP);
    router.get("/decrypt").action(Space.Actions.API.DecryptMd5);
    router.get("/zh").action(Space.Actions.API.ZH);
    router.get("/person").action(Space.Actions.API.thispersondoesnotexist);
    router.get("/waifu").action(Space.Actions.API.thiswaifudoesnotexist);
    router.get("/anime").action(Space.Actions.API.thisanimedoesnotexist);
    router.get("/poet").action(Space.Actions.API.Poet);
    router.get("/happypic").action(Space.Actions.API.Happypic);
    router.get("/dns").action(Space.Actions.API.DNSQuery);
    router.get("/thum").action(Space.Actions.API.Thum);
    router.get("/ipfs/api/add").action(Space.Actions.API.IPFS.Put);
    router.get("/ipfs").action(Space.Actions.API.IPFS.Get);
    router.post("/api/v0/").action(Space.Actions.API.IPFS.Put);
    /////////////////////////////////////////////////////////////////////
    // Header Auth
    router.get("/Admin").action(Space.Actions.Admin);
    /////////////////////////////////////////////////////////////////////
    // 以上非 Cookie 鉴权路由
    // Cookie 鉴权
    if (!router.status.action) {
      const res = await Space.Actions.Auth.CheckCookieAuth(event);
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
    const { dash_nav } = require("./Renderers/Pages/dash/dash_nav");
    dash_nav.forEach((e: string) => {
      router.get("/space/dash/" + e).action(Space.Actions.Dash[e]);
    });
    /////////////////////////////////////////////////////////////////////
    // api
    /////////////////////////////////////////////////////////////////////
    router.post("/space/api/kv/get").action(Space.Actions.API.KV.Get);
    router.post("/space/api/kv/put").action(Space.Actions.API.KV.Put);
    router.post("/space/api/kv/delete").action(Space.Actions.API.KV.Delete);

    router.get("/space/api/kv/get").action(Space.Actions.API.KV.Get);
    router.get("/space/api/kv/put").action(Space.Actions.API.KV.Put);
    router.get("/space/api/kv/delete").action(Space.Actions.API.KV.Delete);

    router.post("/space/api/rkv/get").action(Space.Actions.API.RKV.Get);
    router.post("/space/api/rkv/put").action(Space.Actions.API.RKV.Put);
    router.post("/space/api/rkv/delete").action(Space.Actions.API.RKV.Delete);

    router.get("/space/api/rkv/get").action(Space.Actions.API.RKV.Get);
    router.get("/space/api/rkv/put").action(Space.Actions.API.RKV.Put);
    router.get("/space/api/rkv/delete").action(Space.Actions.API.RKV.Delete);

    router.get("/space/api/GoogleTranslate").action(Space.Actions.API.GoogleTranslate);
    router.get("/space/api/GoogleSearch").action(Space.Actions.API.GoogleSearch);
    router.get("/space/api/WolframAlpha").action(Space.Actions.API.WolframAlpha);
    router.post("/space/api/NPMUpload").action(Space.Actions.API.NPMUpload);
    router.get("/space/api/RSSSUB").action(Space.Actions.API.RSSSUB);
    router.post("/space/api/RSSSUB").action(Space.Actions.API.RSSSUB);

    router.post("/space/api/notify").action(Space.Actions.API.Notify);
    router.get("/space/api/notify").action(Space.Actions.API.Notify);

    router.get("/space/api/calendar").action(Space.Actions.API.Calendar);
    router.post("/space/api/calendar").action(Space.Actions.API.Calendar);
    /////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////
    // test
    router.get("/space/testError").action(async () => {
      throw new Error("test Error")
    })
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
    return await Space.Helpers.ErrorResponse(error.stack, 500);
  }
}
export default handleSpace;
