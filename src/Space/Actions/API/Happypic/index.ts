import Space from "../../../Space"

async function Happypic() {
  const ans = await Space.API.Happypic()
  return fetch(ans)
}
export default Happypic;
