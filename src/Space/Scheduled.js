import bot from './TelegrafBot'
import Space from './Space'

async function handleScheduled(event) {
  let Hours = new Date(event.scheduledTime).getHours()
  let Minutes = new Date(event.scheduledTime).getMinutes()
  let nowTime = `${Hours}:${Minutes}`
  let timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone

  if (Hours == 22 && Minutes == 0) { // 6:00
    let ans = await Space.API.BingImgInfo();
    // chattitle: "喵喵喵" chatid: -1001531720445
    await bot.telegram.sendPhoto("-1001531720445", ans.url, { "caption": ans.copyright });
  }
}

export default handleScheduled;
