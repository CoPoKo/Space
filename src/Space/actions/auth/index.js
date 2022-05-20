import Space from "../../Space";
let SHA256 = require("crypto-js/sha256");
async function AuthPage(that) {
  return new Response(
    Space.renderers.auth.replace(/::reCAPTCHA_CLIENT::/g, reCAPTCHA_CLIENT),
    Space.helpers.headers.html
  );
}
async function CheckAuth(that) {
  let auth = await Space.helpers.readRequest.Body(that.request);
  auth = JSON.parse(auth);
  let token = auth.token;
  let secret = reCAPTCHA_SERVER;
  let ip = that.ip;
  let recaptcha = await Space.helpers.captcha.recaptcha(secret, token, ip);
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
          cookie: "_copoko_space_cookie_auth=" + TestAuth,
        }),
        Space.helpers.headers.json
      );
    }
  }

  return new Response(
    JSON.stringify({
      success: 0,
    }),
    Space.helpers.headers.json
  );
}
async function CheckCookieAuth(that) {
  return Space.helpers.cookie
    .get(that.request, "_copoko_space_cookie_auth")
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
      return await Space.helpers.ErrorResponse(
        "NO PERMISSION TO ACCESS THE SERVICE"
      );
    });
}
let Auth = {
  CheckAuth: CheckAuth,
  CheckCookieAuth: CheckCookieAuth,
  AuthPage: AuthPage,
};
export default Auth;
