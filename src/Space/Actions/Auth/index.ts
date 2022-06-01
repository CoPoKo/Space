import Router from "../../Helpers/Router";
import Space from "../../Space";
const SHA256 = require("crypto-js/sha256");
async function AuthPage(_ctx: any) {
  const html = Space.Renderers.auth.replace(/::reCAPTCHA_CLIENT::/g, reCAPTCHA_CLIENT).replace(/::AUTH_PAGE::/g, AUTH_PAGE)
  return new Response(html, Space.Helpers.Headers.html);
}
async function CheckAuth(ctx: Router) {
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
async function CheckCookieAuth(event: FetchEvent) {
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
const Auth = {
  CheckAuth,
  CheckCookieAuth,
  AuthPage,
};
export default Auth;
