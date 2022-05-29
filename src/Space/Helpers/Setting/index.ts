import Space from "../../Space";

async function Setting(key: string) {
  let set = await Space.API.KV.Get("setting");
  if (set) {
    set = JSON.parse(set);
    return set[key];
  }
  return null;
}
export default Setting;
