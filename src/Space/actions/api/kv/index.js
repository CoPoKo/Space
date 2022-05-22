import Space from "../../../Space";


async function Get(that) {
  try {
    let body = await Space.helpers.readRequest.Body(that.request);
    body = JSON.parse(body);
    let key = body.key;
    let value = await Space.helpers.kv.get(key);
    return new Response(
      JSON.stringify({
        sucess: 1,
        key: key,
        value: value,
      }),
      Space.helpers.headers.json
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        sucess: 0,
        error: error,
      }),
      {
        status:500,
        headers: Space.helpers.headers.json
      }
    );
  }
}
async function Put(that) {
  try {
    let body = await Space.helpers.readRequest.Body(that.request);
    body = JSON.parse(body);
    let key = body.key;
    let value = body.value;
    await Space.helpers.kv.put(key,value);
    return new Response(
      JSON.stringify({
        sucess: 1,
        key: key,
        value: value,
      }),
      Space.helpers.headers.json
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        sucess: 0,
        error: error,
      }),
      {
        status:500,
        headers: Space.helpers.headers.json
      }
    );
  }

}
async function Delete(that) {
  try {
    let body = await Space.helpers.readRequest.Body(that.request);
    body = JSON.parse(body);
    let key = body.key;
    await Space.helpers.kv.delete(key);
    return new Response(
      JSON.stringify({
        sucess: 1,
        key: key,
      }),
      Space.helpers.headers.json
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        sucess: 0,
        error: error,
      }),
      {
        status:500,
        headers: Space.helpers.headers.json
      }
    );
  }
}

let kv = {
  get: Get,
  put: Put,
  delete: Delete,
};
export default kv;
