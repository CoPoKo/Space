import Start from "./Start";
import Help from "./Help";
import Sticker from "./Sticker";
import Catch from "./Catch";
import Message from "./Message";
import Mention from "./Mention";

function BotModel(bot) {
  bot.start(Start);
  bot.help(Help);
  bot.on("sticker", Sticker);
  bot.mention(/.*/, Mention)
  bot.on("message", Message);
  bot.catch(Catch);
}
export default BotModel;
