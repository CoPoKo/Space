import Space from "../../../Space";


async function Get(that) {
  try {
    let body = await Space.Helpers.ReadRequest.Body(that.request);
    body = JSON.parse(body);
    let key = body.key;
    let value = await Space.API.KV.Get(key);
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
        status:500,
        headers: Space.Helpers.Headers.json
      }
    );
  }
}
async function Put(that) {
  try {
    let body = await Space.Helpers.ReadRequest.Body(that.request);
    body = JSON.parse(body);
    let key = body.key;
    let value = body.value;
    await Space.API.KV.Put(key,value);
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
        status:500,
        headers: Space.Helpers.Headers.json
      }
    );
  }

}
async function Delete(that) {
  try {
    let body = await Space.Helpers.ReadRequest.Body(that.request);
    body = JSON.parse(body);
    let key = body.key;
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
        status:500,
        headers: Space.Helpers.Headers.json
      }
    );
  }
}

let KV = {
  Get,
  Put,
  Delete,
};
export default KV;
