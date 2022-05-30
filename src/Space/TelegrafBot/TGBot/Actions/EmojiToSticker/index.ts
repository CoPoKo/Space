import TGBot from "../../../TGBot"
import HandleMessage from "../../HandleMessage";
const EmojiToSticker = async (that: HandleMessage) => {
  const MyStickerSet = TGBot.StickerSet.My;
  for (const key in MyStickerSet) {
    if (Object.hasOwnProperty.call(MyStickerSet, key)) {
      const element = MyStickerSet[key];
      const Reg = new RegExp(key)
      if (Reg.test(that.ctx.message.text))
        return that.ctx.replyWithSticker(element);
    }
  }
};

export default EmojiToSticker;
