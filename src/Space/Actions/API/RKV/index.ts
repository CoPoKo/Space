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
import Router from "../../../Helpers/Router";
import Space from "../../../Space";

async function Get(ctx: Router): Promise<Response> {
  let key: string
  if (ctx.method === "GET") {
    key = ctx.getParam("key")
  } else {
    const body = await Space.Helpers.ReadRequest.Body(ctx.request).then((e: any) => JSON.parse(e))
    key = body.key;
  }
  let res = await Space.API.RKV.Get(key)
  return new Response(
    JSON.stringify({
      sucess: 1,
      key: key,
      value: res,
    }),
    Space.Helpers.Headers.json
  );
}
async function Put(ctx: Router): Promise<Response> {
  let key: string
  let value: string
  if (ctx.method === "GET") {
    key = ctx.getParam("key")
    value = ctx.getParam("value")
  } else {
    const body = await Space.Helpers.ReadRequest.Body(ctx.request).then((e: any) => JSON.parse(e))
    key = body.key;
    value = body.value;
  }
  await Space.API.RKV.Put(key, value)
  return new Response(
    JSON.stringify({
      sucess: 1,
      key: key,
    }),
    Space.Helpers.Headers.json
  );
}
async function Delete(ctx: Router): Promise<Response> {
  let key: string
  if (ctx.method === "GET") {
    key = ctx.getParam("key")
  } else {
    const body = await Space.Helpers.ReadRequest.Body(ctx.request).then((e: any) => JSON.parse(e))
    key = body.key;
  }
  await Space.API.RKV.Delete(key)
  return new Response(
    JSON.stringify({
      sucess: 1,
      key: key,
    }),
    Space.Helpers.Headers.json
  );
}

export default {
  Get,
  Put,
  Delete,
};
