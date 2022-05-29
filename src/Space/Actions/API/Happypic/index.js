import Space from "../../../Space"

async function Happypic(ctx) {
  const ans = await Space.API.Happypic()
  return fetch(ans)
}
export default Happypic;
