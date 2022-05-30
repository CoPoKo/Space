import Bot from "../../TelegrafBot";
import { Context } from '@cfworker/web/dist/context.js';
import { HttpError } from '@cfworker/web/dist/http-error.js';
import createTelegrafMiddware = require('cfworker-middware-telegraf');
import Router from "../../Helpers/Router";
import { Middleware } from "@cfworker/web/dist/middleware";
const resolved = Promise.resolve();

async function TelegrafWebhook(ctx: Router) {
  const context = new Context(ctx.event);
  return Promise.race([
    invokeMiddleware(context, createTelegrafMiddware(Bot)),
    context.responded
  ])
}

async function invokeMiddleware(context: Context, middleware: Middleware) {
  try {
    await middleware(context, () => resolved);
    return context.res.create();
  } catch (err) {
    if (err instanceof HttpError) {
      return err.toResponse();
    }
    const status = 500;
    const statusText = "Internal Server Error";
    const headers = { 'content-type': 'text/plain' };
    return new Response(statusText, { status, statusText, headers });
  }
}

export default TelegrafWebhook;
