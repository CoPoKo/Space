async function Nbnhhsh(key: string) {
  if (!key)
    key = "nb"

  const res = await fetch(new Request("https://lab.magiconch.com/api/nbnhhsh/guess", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({ text: key }),
  }));
  const data: any = await res.json()
  const ans = []
  if (data.length) {
    data.forEach((result: any) => {
      let content = `${result.name} 理解不能`;
      if (result.trans && result.trans.length > 0) {
        content = `${result.name} 的含义：${result.trans.join(",")}`;
      } else if (result.inputting && result.inputting.length > 0) {
        content = `${result.name} 有可能是：${result.inputting.join(
          ","
        )}`;
      }
      ans.push(content);
    });
  }
  return ans.join("\n");
}
export default Nbnhhsh;
