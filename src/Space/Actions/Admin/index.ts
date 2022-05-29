import Space from "../../Space";

async function Admin(ctx: any) {
  // Auth
  if (!doBasicAuth(ctx.request)) {
    return unauthorized();
  }
  const path = ctx.pathname
  if (path.startsWith('/Admin/happypic-sex')) {
    const ans = await Space.API.Setu.HappypicSex()
    return fetch(ans)
  }
  if (path.startsWith('/Admin/setu/gif')) {
    const id = ctx.getParam('id') || Space.Helpers.RandomNum(1, 35)
    return new Response('<html style="height: 100%;"><head><meta name="viewport" content="width=device-width, minimum-scale=0.1"><title>404</title></head><body style="text-align: center;margin: 0px; background: #0e0e0e; height: 100%"><img style="-webkit-user-select: none;margin: auto;cursor: zoom-in;background-color: hsl(0, 0%, 90%);transition: background-color 300ms;" src="/Admin/setu/api/gif?id=' + id + '"></body></html>'
      , Space.Helpers.Headers.html);
  }
  if (path.startsWith('/Admin/setu/api/gif')) {
    const id = ctx.getParam('id')
    return Space.API.Setu.SJMM(id)
  }
  if (path.startsWith('/Admin/setu/tui')) {
    const id = ctx.getParam('id')
    return Space.API.Setu.Tui(id)
  }
  if (path.startsWith('/Admin/setu/el')) {
    const ans = await Space.API.Setu.El()
    return fetch(ans)
  }


  return Space.Helpers.ErrorResponse("Opps...", 403);
}

export default Admin;

/**
 * 简单鉴权
 */
function doBasicAuth(request: any) {
  const auth = request.headers.get('Authorization');
  if (!auth || !/^Basic [A-Za-z0-9._~+/-]+=*$/i.test(auth)) {
    return false;
  }
  const [user, pass] = parseBasicAuth(auth);
  return user === SpaceName && pass === SpacePassword;
}
function parseBasicAuth(auth: string) {
  try {
    return Buffer.from(auth.split(' ').pop(), 'base64').toString().split(':');
  } catch (e) {
    return [];
  }
}
/**
 * 未鉴权 401
 */
function unauthorized() {
  return Space.Helpers.ErrorResponse("您的权限不足，请不要再发送此请求", 401, {
    headers: {
      "content-type": "text/html; charset=utf-8",
      'WWW-Authenticate': 'Basic realm="MyAPI"',
      'Access-Control-Allow-Origin': '*'
    },
  });
}