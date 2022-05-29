import Space from "../../../Space"

async function thispersondoesnotexist(ctx) {
  const ans = await Space.API.thispersondoesnotexist()
  return fetch(ans)
}
export default thispersondoesnotexist;
