import Bot from "../../TelegrafBot";
const { Context } = require('@cfworker/web/dist/context.js');
const { HttpError } = require('@cfworker/web/dist/http-error.js');
const createTelegrafMiddware = require('cfworker-middware-telegraf');
const resolved = Promise.resolve();

async function TelegrafWebhook(ctx) {
  const context = new Context(ctx.event);
  return Promise.race([
    invokeMiddleware(context, createTelegrafMiddware(Bot)),
    context.responded
  ])
}

async function invokeMiddleware(context, middleware) {
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
