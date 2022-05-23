import Space from "../../../Space";

async function Setting(key) {
  let set = await Space.API.KV.Get("setting");
  if (set) {
    return set[key];
  }
  return null;
}
export default Setting;
