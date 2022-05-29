import Space from "../../../Space";

async function Get(ctx: any) {
  try {
    const body = await Space.Helpers.ReadRequest.Body(ctx.request).then((e: any) => JSON.parse(e))
    const key = body.key;
    const value = await Space.API.KV.Get(key);
    return new Response(
      JSON.stringify({
        sucess: 1,
        key: key,
        value: value,
      }),
      Space.Helpers.Headers.json
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        sucess: 0,
        error: error,
      }),
      {
        status: 500,
        headers: {
          "content-type": "application/json; charset=utf-8",
          "Access-Control-Allow-Origin": "*",
        }
      }
    );
  }
}
async function Put(ctx: any) {
  try {
    const body = await Space.Helpers.ReadRequest.Body(ctx.request).then((e: any) => JSON.parse(e))
    const key = body.key;
    const value = body.value;
    await Space.API.KV.Put(key, value);
    return new Response(
      JSON.stringify({
        sucess: 1,
        key: key,
        value: value,
      }),
      Space.Helpers.Headers.json
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        sucess: 0,
        error: error,
      }),
      {
        status: 500,
        headers: {
          "content-type": "application/json; charset=utf-8",
          "Access-Control-Allow-Origin": "*",
        }
      }
    );
  }

}
async function Delete(ctx: any) {
  try {
    const body = await Space.Helpers.ReadRequest.Body(ctx.request).then((e: string) => JSON.parse(e))
    const key = body.key;
    await Space.API.KV.Delete(key);
    return new Response(
      JSON.stringify({
        sucess: 1,
        key: key,
      }),
      Space.Helpers.Headers.json
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        sucess: 0,
        error: error,
      }),
      {
        status: 500,
        headers: {
          "content-type": "application/json; charset=utf-8",
          "Access-Control-Allow-Origin": "*",
        }
      }
    );
  }
}

const KV = {
  Get,
  Put,
  Delete,
};
export default KV;
