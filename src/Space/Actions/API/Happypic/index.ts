import Space from "../../../Space"

async function Happypic(_ctx: any) {
  const ans = await Space.API.Happypic()
  return fetch(ans)
}
export default Happypic;
