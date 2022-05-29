import Space from "../../../Space"
import TGBot from "../../TGBot"
async function Sticker(ctx: any) {
  if (Space.Helpers.RandomNum(1, 100) <= 10) {
    if (ctx.message.sticker.emoji in TGBot.StickerSet.My) {
      return ctx.replyWithSticker(TGBot.StickerSet.My[ctx.message.sticker.emoji]);
    } else if (ctx.message.sticker.emoji in TGBot.StickerSet.Cat) {
      return ctx.replyWithSticker(TGBot.StickerSet.Cat[ctx.message.sticker.emoji]);
    }
  }
}

export default Sticker;