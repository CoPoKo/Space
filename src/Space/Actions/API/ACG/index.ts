import Space from "../../../Space"

async function ACG() {
  return Space.API.ACG().then(fetch)
}
export default ACG;
