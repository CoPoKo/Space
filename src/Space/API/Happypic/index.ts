import Space from "../../Space"

async function Happypic() {
  return "https://cdn.jsdelivr.net/npm/chenyfan-happypic@0.0." + Space.Helpers.RandomNum(1, 33) + "/" + Space.Helpers.RandomNum(1, 99) + ".jpg"
}
export default Happypic;
