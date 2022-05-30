import Space from "../../../Space"

async function thispersondoesnotexist() {
  const ans = await Space.API.thispersondoesnotexist()
  return fetch(ans)
}
export default thispersondoesnotexist;
