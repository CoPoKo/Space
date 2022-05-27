import bot from './TelegrafBot'
import Space from './Space'

async function handleScheduled(event) {
  let Hours = UTC8Hours(new Date(event.scheduledTime).getHours())
  let Minutes = new Date(event.scheduledTime).getMinutes()

  if (Hours == 6 && Minutes == 0) {
    let ans = await Space.API.BingImgInfo();
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
