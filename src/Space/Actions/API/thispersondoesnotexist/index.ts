import Space from "../../../Space"

async function thispersondoesnotexist() {
  return Space.API.thispersondoesnotexist().then(fetch)
}
export default thispersondoesnotexist;
