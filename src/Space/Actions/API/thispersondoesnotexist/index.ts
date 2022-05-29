import Space from "../../../Space"

async function thispersondoesnotexist(_ctx: any) {
  const ans = await Space.API.thispersondoesnotexist()
  return fetch(ans)
}
export default thispersondoesnotexist;
