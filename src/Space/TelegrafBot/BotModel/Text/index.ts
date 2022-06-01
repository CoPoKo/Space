import { Context } from "telegraf";
import { Update } from "telegraf/typings/core/types/typegram";
import ParseWorkflow from "../../TGBot/ParseWorkflow";
const workflows = require("./workflows.yml").default;

async function Text(ctx: Context<Update>) {
  // return ctx.reply(String(ctx.message))
  ParseWorkflow(ctx, workflows)
}

export default Text;
