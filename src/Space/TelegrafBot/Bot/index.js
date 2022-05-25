import Start from "./Start";
import Help from "./Help";

function BotCreate(bot){
  bot.start(Start);
  bot.help(Help);
}
export default BotCreate;
