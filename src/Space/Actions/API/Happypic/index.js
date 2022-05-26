import Space from "../../../Space"

async function Happypic(ctx) {
  let ans = await Space.API.Happypic()
  return fetch(ans)
}
export default Happypic;
