import Space from "../../../Space"

async function ACG(that) {
  let ans = await Space.API.ACG()
  return fetch(ans)
}
export default ACG;
