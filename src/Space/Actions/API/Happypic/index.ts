import Space from "../../../Space"

async function Happypic() {
  return Space.API.Happypic().then(fetch)
}
export default Happypic;
