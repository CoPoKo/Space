import Space from "../../../Space"

async function ACG(ctx) {
  const ans = await Space.API.ACG()
  return fetch(ans)
}
export default ACG;
