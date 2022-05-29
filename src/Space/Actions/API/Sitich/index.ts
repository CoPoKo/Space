import Space from "../../../Space"

async function Sitich(_ctx: any) {
  const ans = await Space.API.Sitich()
  return fetch(ans)
}
export default Sitich;

