import Space from "../../../Space"

async function Sitich(that) {
  let ans = await Space.API.Sitich()
  return fetch(ans)
}
export default Sitich;

