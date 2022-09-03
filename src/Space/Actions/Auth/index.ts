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
import Router from "../../Helpers/Router";
import Space from "../../Space";
import SHA256 = require("crypto-js/sha256");

async function AuthPage(_ctx: Router): Promise<Response> {
  const html = Space.Renderers.auth.replace(/::reCAPTCHA_CLIENT::/g, reCAPTCHA_CLIENT).replace(/::AUTH_PAGE::/g, AUTH_PAGE)
  return new Response(html, Space.Helpers.Headers.html);
}
async function CheckAuth(ctx: Router): Promise<Response> {
  const auth = await Space.Helpers.ReadRequest.Body(ctx.request).then(JSON.parse)
  const token = auth.token;
  const secret = reCAPTCHA_SERVER;
  const ip = ctx.ip;
  const recaptcha = await Space.Helpers.Captcha.recaptcha(secret, token, ip);
  if (recaptcha) {
    const TrueAuth = `${SHA256(SpaceName).toString()}::${SHA256(SpacePassword).toString()}`;
    const TestAuth = `${SHA256(auth.name).toString()}::${SHA256(auth.password).toString()}`;
    if (TestAuth == TrueAuth) {
      return new Response(
        JSON.stringify({
          success: 1,
        }),
        {
          headers: {
            "content-type": "application/json; charset=utf-8",
            "Access-Control-Allow-Origin": "*",
            "set-cookie": "_copoko_space_cookie_auth=" + TestAuth + ";path=/space;HttpOnly;Secure;SameSite=Strict",
          },
        }
      );
    }
  }

  return new Response(
    JSON.stringify({
      success: 0,
    }),
    Space.Helpers.Headers.json
  );
}
async function CheckCookieAuth(event: FetchEvent): Promise<Response | "PASS"> {
  return Space.Helpers.Cookie
    .get(event.request, "_copoko_space_cookie_auth")
    .then(async (_copoko_space_cookie_auth) => {
      if (_copoko_space_cookie_auth) {
        const TrueAuth = `${SHA256(SpaceName).toString()}::${SHA256(SpacePassword).toString()}`;
        const TestAuth = _copoko_space_cookie_auth;
        if (TestAuth == TrueAuth) {
          return "PASS";
        }
      }
      return await Space.Helpers.ErrorResponse("NO PERMISSION TO ACCESS THE SERVICE", 403);
    });
}

export default {
  CheckAuth,
  CheckCookieAuth,
  AuthPage,
};
