import { Context } from "telegraf";
import { Update } from "telegraf/typings/core/types/typegram";

async function Start(ctx: Context<Update>) {
  ctx.replyWithSticker('CAACAgIAAxkBAANTYQEkwBt3RLVALRhL4e6-qkWP7fQAApoOAAJzORBKVsUty3IbWNEgBA')
}

export default Start;
