import Space from "../../../Space"

async function ACG() {
  const ans = await Space.API.ACG()
  return fetch(ans)
}
export default ACG;
