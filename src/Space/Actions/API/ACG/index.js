import Space from "../../../Space"

async function ACG(ctx) {
  let ans = await Space.API.ACG()
  return fetch(ans)
}
export default ACG;
