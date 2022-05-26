import Start from "./Start";
import Help from "./Help";
import Sticker from "./Sticker";

function BotCreate(bot) {
  bot.start(Start);
  bot.help(Help);
  bot.on('sticker', Sticker);
}
export default BotCreate;
