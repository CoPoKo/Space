import Space from "../../../Space"

async function NPMUpload(ctx) {
  const request = ctx.request;
  const formData = await request.formData()
  const file = await formData.get("file")
  const ans = await Space.API.NPMUpload(file)
  return new Response(ans.body, { status: ans.status })
}
export default NPMUpload;
