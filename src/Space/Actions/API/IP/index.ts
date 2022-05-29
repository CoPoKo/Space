import Space from "../../../Space"

async function IP(ctx: any) {
  const request = ctx.request
  return new Response(JSON.stringify({
    "CF-Connecting-IP": request.headers.get("CF-Connecting-IP"),
    "X-Forwarded-For": request.headers.get("X-Forwarded-For"),
    "Cf-Ipcountry": request.headers.get("Cf-Ipcountry"),
    "X-Real-IP": new Map(request.headers).get('x-real-ip')
  }), Space.Helpers.Headers.json)
}
export default IP;
