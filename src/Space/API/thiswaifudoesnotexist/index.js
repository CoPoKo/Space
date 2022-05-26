import Space from "../../Space"

async function thiswaifudoesnotexist(id) {
  return `https://www.thiswaifudoesnotexist.net/example-${id != undefined ? id : Math.floor(Math.random() * (100000) + 1)}.jpg`;
}
export default thiswaifudoesnotexist;
