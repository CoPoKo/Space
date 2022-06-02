import Router from "../../../Helpers/Router";
import Space from "../../../Space";

async function Get(ctx: Router) {
  let key: string
  if (ctx.method === "GET") {
    key = ctx.getParam("key")
  } else {
    const body = await Space.Helpers.ReadRequest.Body(ctx.request).then((e: any) => JSON.parse(e))
    key = body.key;
  }
  const value = await Space.API.KV.Get(key);
  return new Response(
    JSON.stringify({
      sucess: 1,
      key: key,
      value: value,
    }),
    Space.Helpers.Headers.json
  );
}
async function Put(ctx: Router) {
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
  await Space.API.KV.Put(key, value);
  return new Response(
    JSON.stringify({
      sucess: 1,
      key: key,
      value: value,
    }),
    Space.Helpers.Headers.json
  );
}
async function Delete(ctx: Router) {
  let key: string
  if (ctx.method === "GET") {
    key = ctx.getParam("key")
  } else {
    const body = await Space.Helpers.ReadRequest.Body(ctx.request).then((e: any) => JSON.parse(e))
    key = body.key;
  }
  await Space.API.KV.Delete(key);
  return new Response(
    JSON.stringify({
      sucess: 1,
      key: key,
    }),
    Space.Helpers.Headers.json
  );
}

const KV = {
  Get,
  Put,
  Delete,
};
export default KV;
