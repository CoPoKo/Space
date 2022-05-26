import Space from "../../../../Space";

const SearchEngineLink = async that => {
  let engineList = {
    baidu: {
      keywords: ["百度", "度娘", "baidu"],
      url: "https://www.baidu.com/s?wd=",
    },
    google: {
      keywords: ["谷歌", "google", "Google"],
      url: "https://www.google.com/search?q=",
    },
    bing: {
      keywords: ["bing", "必应"],
      url: "https://cn.bing.com/search?q=",
    },
    buhuibaidu: {
      keywords: ["不会百度"],
      url: "https://buhuibaidu.me/?s=",
    },
  };
  function getLinkByEngine(name, keyword) {
    keyword = encodeURI(keyword);
    if (engineList[name]) {
      return engineList[name].url + keyword;
    } else {
      for (const engine in engineList) {
        if (engineList[engine].keywords.includes(name)) {
          return engineList[engine].url + keyword;
        }
      }
      return "";
    }
  }
  const msg = that.ctx.message.text;
  const engineString = msg.split(" ")[0];
  let keyword = msg.slice(engineString.length).trim();
  const buhuibaidu = msg.match(/不会百度(.*)吗/);
  if (buhuibaidu) {
    keyword = buhuibaidu[1].trim();
    that.ctx.reply(getLinkByEngine("buhuibaidu", keyword));
  } else {
    const content = getLinkByEngine(engineString, keyword);
    if (content) {
      await that.ctx.reply(content);
      let ans = await Space.API.Thum({ url: content, wait: 1 });
      await fetch(ans).then(async (res) => {
        return await that.ctx.replyWithPhoto(ans, { "caption": content });
      }).catch(err => { })
    }
  }
};

export default SearchEngineLink;
