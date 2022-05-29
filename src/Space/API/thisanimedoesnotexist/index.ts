import Space from "../../Space"
function pad(n: any, width: number) {
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join('0') + n;
}
async function thisanimedoesnotexist(creativity: any, seed: any) {
  return `https://thisanimedoesnotexist.ai/results/psi-${creativity != undefined ? creativity : (Space.Helpers.RandomNum(3, 20) / 10)}/seed${seed != undefined ? seed : pad((Math.floor(Math.random() * Math.floor(100000))), 5)}.png`;
}
export default thisanimedoesnotexist;