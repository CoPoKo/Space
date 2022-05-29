import Space from "../../../Space"

async function ACG(_ctx: any) {
  const ans = await Space.API.ACG()
  return fetch(ans)
}
export default ACG;
