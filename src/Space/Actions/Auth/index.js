import Space from "../../Space";
let SHA256 = require("crypto-js/sha256");
async function AuthPage(ctx) {
  return new Response(
    Space.Renderers.auth.replace(/::reCAPTCHA_CLIENT::/g, reCAPTCHA_CLIENT),
    Space.Helpers.Headers.html
  );
}
async function CheckAuth(ctx) {
  let auth = await Space.Helpers.ReadRequest.Body(ctx.request);
  auth = JSON.parse(auth);
  let token = auth.token;
  let secret = reCAPTCHA_SERVER;
  let ip = ctx.ip;
  let recaptcha = await Space.Helpers.Captcha.recaptcha(secret, token, ip);
  if (recaptcha) {
    let TrueAuth = `${SHA256(SpaceName).toString()}::${SHA256(
      SpacePassword
    ).toString()}`;
    let TestAuth = `${SHA256(auth.name).toString()}::${SHA256(
      auth.password
    ).toString()}`;
    if (TestAuth == TrueAuth) {
      return new Response(
        JSON.stringify({
          success: 1,
        }),
        {
          headers: {
            "content-type": "application/json; charset=utf-8",
            "Access-Control-Allow-Origin": "*",
            "set-cookie": "_copoko_space_cookie_auth=" + TestAuth + ";HttpOnly;Secure;SameSite=Strict",
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
async function CheckCookieAuth(ctx) {
  return Space.Helpers.Cookie
    .get(ctx.request, "_copoko_space_cookie_auth")
    .then(async (_copoko_space_cookie_auth) => {
      if (_copoko_space_cookie_auth) {
        let TrueAuth = `${SHA256(SpaceName).toString()}::${SHA256(
          SpacePassword
        ).toString()}`;
        let TestAuth = _copoko_space_cookie_auth;
        if (TestAuth == TrueAuth) {
          return "PASS";
        }
      }
      return await Space.Helpers.ErrorResponse("NO PERMISSION TO ACCESS THE SERVICE", 403);
    });
}
let Auth = {
  CheckAuth,
  CheckCookieAuth,
  AuthPage,
};
export default Auth;
