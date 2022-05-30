import Space from "../../../Space"

async function Sitich() {
  const ans = await Space.API.Sitich()
  return fetch(ans)
}
export default Sitich;

