import Space from "../../Space"

async function GetJTPYStr() {
  const FetchURL = "https://cdn.jsdelivr.net/gh/MHG-LAB/ChineseUtils@main/JTPY.txt";
  const str = await Space.Helpers.Fetch.Text(FetchURL)
  return str;
}
async function GetFTPYStr() {
  const FetchURL = "https://cdn.jsdelivr.net/gh/MHG-LAB/ChineseUtils@main/FTPY.txt";
  const str = await Space.Helpers.Fetch.Text(FetchURL)
  return str;
}
// 简=>繁
async function Traditionalized(cc: string) {
  let str = '';
  const JTPYStr = await GetJTPYStr()
  const FTPYStr = await GetFTPYStr()
  for (let i = 0; i < cc.length; i++) {
    if (JTPYStr.indexOf(cc.charAt(i)) != -1)
      str += FTPYStr.charAt(JTPYStr.indexOf(cc.charAt(i)));
    else
      str += cc.charAt(i);
  }
  return str;
}
// 繁=>简
async function Simplized(cc: string) {
  let str = '';
  const JTPYStr = await GetJTPYStr()
  const FTPYStr = await GetFTPYStr()
  for (let i = 0; i < cc.length; i++) {
    if (FTPYStr.indexOf(cc.charAt(i)) != -1)
      str += JTPYStr.charAt(FTPYStr.indexOf(cc.charAt(i)));
    else
      str += cc.charAt(i);
  }
  return str;
}
const ZH = {
  Simplized,
  Traditionalized,
}
export default ZH;
