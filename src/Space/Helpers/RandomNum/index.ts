// 生成从minNum到maxNum的随机数
function RandomNum(minNum: number, maxNum: number) {
  return Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
}
export default RandomNum;
