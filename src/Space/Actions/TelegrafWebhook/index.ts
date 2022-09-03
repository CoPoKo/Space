/*!
 * ==========================================================================
 * "CoPoKo Space" License
 * GNU General Public License version 3.0 (GPLv3)
 * ==========================================================================
 * This file is part of "CoPoKo Space"
 *
 * "CoPoKo Space" is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * "CoPoKo Space" is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with "CoPoKo Space". If not, see <http://www.gnu.org/licenses/>.
 * ==========================================================================
*/
import Bot from "../../TelegrafBot";
import { Context } from '@cfworker/web/dist/context.js';
import { HttpError } from '@cfworker/web/dist/http-error.js';
import createTelegrafMiddware = require('cfworker-middware-telegraf');
import Router from "../../Helpers/Router";
import { Middleware } from "@cfworker/web/dist/middleware";
const resolved = Promise.resolve();

async function TelegrafWebhook(ctx: Router): Promise<Response> {
  const context = new Context(ctx.event);
  return Promise.race([
    invokeMiddleware(context, createTelegrafMiddware(Bot)),
    context.responded
  ])
}

async function invokeMiddleware(context: Context, middleware: Middleware): Promise<Response> {
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
