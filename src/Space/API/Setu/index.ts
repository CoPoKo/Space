import Space from "../../Space"

async function HappypicSex() {
  return "https://cdn.jsdelivr.net/npm/chenyfan-happypic-sex@0.0." + Space.Helpers.RandomNum(1, 19) + "/" + Space.Helpers.RandomNum(1, 99) + ".jpg"
}

async function SJMM(id?: string | number) {
  if (!id) {
    id = Space.Helpers.RandomNum(1, 35)
  }
  const set = await Space.Helpers.Setting("GitHub");
  const BOT_TOKEN = set.BOT_TOKEN;
  return fetch("https://raw.githubusercontent.com/MHG-LAB/PRIVATEPIC/master/setu/gif/" + id + ".gif", {
    headers: {
      Accept: "application/vnd.github.v3.raw",
      Authorization: "token " + BOT_TOKEN
    }
  })
}
async function Tui(id?: string | number) {
  if (!id) {
    id = Space.Helpers.RandomNum(1, 557)
  }
  const set = await Space.Helpers.Setting("GitHub");
  const BOT_TOKEN = set.BOT_TOKEN;
  return fetch("https://raw.githubusercontent.com/MHG-LAB/PRIVATEPIC/master/setu/tui/" + id + ".jpg", {
    headers: {
      Accept: "application/vnd.github.v3.raw",
      Authorization: "token " + BOT_TOKEN
    }
  })
}
async function El() {
  const FetchUrl = "https://raw.githubusercontent.com/ElpsyCN/el-bot-api/8aa3c64fe7cb715349c14b363ef4c43996c5ef8a/data/setu.json"
  return await Space.Helpers.Fetch.JSON(FetchUrl).then((e: any) => e.image).then((e: any) => e[Space.Helpers.RandomNum(0, e.length - 1)].url)
}

const Setu = {
  HappypicSex,
  SJMM,
  Tui,
  El,
}
export default Setu;
