import Space from "../../Space"

async function Nbnhhsh(key) {
  if (!key)
    key = "nb"

  let res = await fetch(new Request("https://lab.magiconch.com/api/nbnhhsh/guess", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({ text: key }),
  }));
  let data = await res.json()
  let ans = []
  if (data.length) {
    data.forEach((result) => {
      let content = `${result.name} 理解不能`;
      if (result.trans && result.trans.length > 0) {
        content = `${result.name} 的含义：${result.trans.join("，")}`;
      } else if (result.inputting && result.inputting.length > 0) {
        content = `${result.name} 有可能是：${result.inputting.join(
          "，"
        )}`;
      }
      ans.push(content);
    });
  }
  return ans.join("\n");
}
export default Nbnhhsh;
