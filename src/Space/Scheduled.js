import bot from './TelegrafBot'
import Space from './Space'

async function handleScheduled(event) {
  const Hours = UTC8Hours(new Date(event.scheduledTime).getHours())
  const Minutes = new Date(event.scheduledTime).getMinutes()

  if (Hours == 2 && Minutes == 0) {
    await Space.API.CF.createRoute();
    await Space.API.CF.setSecurityLevel("essentially_off")
  }
  if (Hours == 6 && Minutes == 0) {
    const ans = await Space.API.BingImgInfo();
    // chattitle: "喵喵喵" chatid: -1001531720445
    await bot.telegram.sendPhoto("-1001531720445", ans.url, { "caption": ans.copyright });
  }
}

function UTC8Hours(Hours) {
  let UTC8Hours = Hours + 8
  if (UTC8Hours > 24) {
    UTC8Hours = UTC8Hours - 24
  }
  return UTC8Hours
}

export default handleScheduled;
