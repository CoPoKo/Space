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
    router
      .get("/favicon.ico").action(Space.Actions.Favicon)
      .get("/robots.txt").action(Space.Actions.Robots)
      .get("/version").action(Space.Actions.Version)
      .get(AUTH_PAGE).action(Space.Actions.Auth.AuthPage)
      .post("/space/auth" + AUTH_PAGE).action(Space.Actions.Auth.CheckAuth)
      // 安全跳转
      .get("/link").action(Space.Actions.Link)
      // Telegraf Webhook
      .post(Telegraf_BOT_WEBHOOK).action(Space.Actions.TelegrafWebhook)
      /////////////////////////////////////////////////////////////////////
      // OPEN Pages
      .get("/", true).action(Space.Actions.Pages.API)
      .get("/github-event").action(Space.Actions.Pages.GithubEvent)
      .get("/pdf").action(Space.Actions.Pages.PDF)
      .get("/color").action(Space.Actions.Pages.Color)
      .get("/privacy-policy").action(Space.Actions.Pages.PrivacyPolicy)
      .get("/contact").action(Space.Actions.Pages.PrivacyPolicy)
      .get("/apisource").action(Space.Actions.Pages.PrivacyPolicy)
      // .get("/tree-hollow").action(Space.Actions.Pages.TreeHollow)
      // .post("/tree-hollow").action(Space.Actions.Pages.TreeHollow)
      // OPEN CDN
      .get("/npm/").action(Space.Actions.CDN)
      .get("/gh/").action(Space.Actions.CDN)
      .get("/wp/").action(Space.Actions.CDN)
      .get("/twemoji/").action(Space.Actions.CDN)
      .get("/gitraw/").action(Space.Actions.CDN)
      .get("/gist/").action(Space.Actions.CDN)
      .get("/ajax/libs/").action(Space.Actions.CDN)
      // OPEN API
      .get("/bing").action(Space.Actions.API.BingImgInfo)
      .get("/sitich").action(Space.Actions.API.Sitich)
      .get("/soul").action(Space.Actions.API.Soul)
      .get("/hitokoto").action(Space.Actions.API.Hitokoto)
      .get("/unsplash").action(Space.Actions.API.Unsplash)
      .get("/acg").action(Space.Actions.API.ACG)
      .get("/niubi").action(Space.Actions.API.Niubi)
      .get("/ipinfo").action(Space.Actions.API.IP)
      .get("/decrypt").action(Space.Actions.API.DecryptMd5)
      .get("/zh").action(Space.Actions.API.ZH)
      .get("/person").action(Space.Actions.API.thispersondoesnotexist)
      .get("/waifu").action(Space.Actions.API.thiswaifudoesnotexist)
      .get("/anime").action(Space.Actions.API.thisanimedoesnotexist)
      .get("/poet").action(Space.Actions.API.Poet)
      .get("/happypic").action(Space.Actions.API.Happypic)
      .get("/dns").action(Space.Actions.API.DNSQuery)
      .get("/thum").action(Space.Actions.API.Thum)
      // .get("/ipfs/api/add").action(Space.Actions.API.IPFS.Put)
      .get("/ipfs").action(Space.Actions.API.IPFS.Get)
      // .post("/api/v0/").action(Space.Actions.API.IPFS.Put)
      .post("/hole").action(Space.Actions.API.Hole)
      .get("/rss-view/").action(Space.Actions.API.RssView)
      /////////////////////////////////////////////////////////////////////
      // Header Auth
      .get("/Admin").action(Space.Actions.Admin)
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
    router
      .post("/space/api/kv/get").action(Space.Actions.API.KV.Get)
      .post("/space/api/kv/put").action(Space.Actions.API.KV.Put)
      .post("/space/api/kv/delete").action(Space.Actions.API.KV.Delete)

      .get("/space/api/kv/get").action(Space.Actions.API.KV.Get)
      .get("/space/api/kv/put").action(Space.Actions.API.KV.Put)
      .get("/space/api/kv/delete").action(Space.Actions.API.KV.Delete)

      .post("/space/api/rkv/get").action(Space.Actions.API.RKV.Get)
      .post("/space/api/rkv/put").action(Space.Actions.API.RKV.Put)
      .post("/space/api/rkv/delete").action(Space.Actions.API.RKV.Delete)

      .get("/space/api/rkv/get").action(Space.Actions.API.RKV.Get)
      .get("/space/api/rkv/put").action(Space.Actions.API.RKV.Put)
      .get("/space/api/rkv/delete").action(Space.Actions.API.RKV.Delete)

      .get("/space/api/GoogleTranslate").action(Space.Actions.API.GoogleTranslate)
      .get("/space/api/GoogleSearch").action(Space.Actions.API.GoogleSearch)
      .get("/space/api/WolframAlpha").action(Space.Actions.API.WolframAlpha)
      .post("/space/api/NPMUpload").action(Space.Actions.API.NPMUpload)
      .get("/space/api/RSSSUB").action(Space.Actions.API.RSSSUB)
      .post("/space/api/RSSSUB").action(Space.Actions.API.RSSSUB)

      .post("/space/api/notify").action(Space.Actions.API.Notify)
      .get("/space/api/notify").action(Space.Actions.API.Notify)

      .get("/space/api/calendar").action(Space.Actions.API.Calendar)
      .post("/space/api/calendar").action(Space.Actions.API.Calendar)

      .get("/space/api/Hole").action(Space.Actions.API.Hole)
      .post("/space/api/Hole").action(Space.Actions.API.Hole)
      /////////////////////////////////////////////////////////////////////
      /////////////////////////////////////////////////////////////////////
      // test
      .get("/space/testError").action(async () => {
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
