import Space from "../../../../Space";
import TGBot from "../../../TGBot"
const EmojiToSticker = async (that: any) => {
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
