import Space from "../../Space"

async function GetJTPYStr() {
  let FetchURL = "https://cdn.jsdelivr.net/gh/MHG-LAB/ChineseUtils@main/JTPY.txt";
  let str = await Space.Helpers.Fetch.Text(FetchURL)
  return str;
}
async function GetFTPYStr() {
  let FetchURL = "https://cdn.jsdelivr.net/gh/MHG-LAB/ChineseUtils@main/FTPY.txt";
  let str = await Space.Helpers.Fetch.Text(FetchURL)
  return str;
}
// 简=>繁
async function Traditionalized(cc) {
  var str = '';
  var JTPYStr = await GetJTPYStr()
  var FTPYStr = await GetFTPYStr()
  for (var i = 0; i < cc.length; i++) {
    if (JTPYStr.indexOf(cc.charAt(i)) != -1)
      str += FTPYStr.charAt(JTPYStr.indexOf(cc.charAt(i)));
    else
      str += cc.charAt(i);
  }
  return str;
}
// 繁=>简
async function Simplized(cc) {
  var str = '';
  var JTPYStr = await GetJTPYStr()
  var FTPYStr = await GetFTPYStr()
  for (var i = 0; i < cc.length; i++) {
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
