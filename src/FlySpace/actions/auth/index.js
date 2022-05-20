import FlySpace from "../../FlySpace";
let SHA256 = require("crypto-js/sha256");
async function AuthPage(that) {
  return new Response(
    FlySpace.renderers.auth.replace(/::reCAPTCHA_CLIENT::/g, reCAPTCHA_CLIENT),
    FlySpace.helpers.headers.html
  );
}
async function CheckAuth(that) {
  let auth = await FlySpace.helpers.readRequest.Body(that.request);
  auth = JSON.parse(auth);
  let token = auth.token;
  let secret = reCAPTCHA_SERVER;
  let ip = that.ip;
  let recaptcha = await FlySpace.helpers.captcha.recaptcha(secret, token, ip);
  if (recaptcha) {
    let TrueAuth = `${SHA256(FlySpaceName).toString()}::${SHA256(
      FlySpacePassword
    ).toString()}`;
    let TestAuth = `${SHA256(auth.name).toString()}::${SHA256(
      auth.password
    ).toString()}`;
    if (TestAuth == TrueAuth) {
      return new Response(
        JSON.stringify({
          success: 1,
          cookie: "_flyspace_cookie_auth=" + TestAuth,
        }),
        FlySpace.helpers.headers.json
      );
    }
  }

  return new Response(
    JSON.stringify({
      success: 0,
    }),
    FlySpace.helpers.headers.json
  );
}
async function CheckCookieAuth(that) {
  return FlySpace.helpers.cookie
    .get(that.request, "_flyspace_cookie_auth")
    .then(async (_flyspace_cookie_auth) => {
      if (_flyspace_cookie_auth) {
        let TrueAuth = `${SHA256(FlySpaceName).toString()}::${SHA256(
          FlySpacePassword
        ).toString()}`;
        let TestAuth = _flyspace_cookie_auth;
        if (TestAuth == TrueAuth) {
          return "PASS";
        }
      }
      return await FlySpace.helpers.ErrorResponse(
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
