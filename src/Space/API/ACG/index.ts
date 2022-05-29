import Space from "../../Space"

async function ACG() {
  return "https://cdn.jsdelivr.net/gh/MHG-LAB/ACG@main/image/" + Space.Helpers.RandomNum(1, 279) + ".webp"
}
export default ACG;
