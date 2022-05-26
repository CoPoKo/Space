import Space from "../../../Space"

async function thispersondoesnotexist(ctx) {
  let ans = await Space.API.thispersondoesnotexist()
  return fetch(ans)
}
export default thispersondoesnotexist;
