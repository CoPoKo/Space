const js = {
  headers: {
    "content-type": "application/javascript; charset=utf-8",
    "Access-Control-Allow-Origin": "*",
  },
};
const html = {
  headers: {
    "content-type": "text/html; charset=utf-8",
    "Access-Control-Allow-Origin": "*",
  },
};
const json = {
  headers: {
    "content-type": "application/json; charset=utf-8",
    "Access-Control-Allow-Origin": "*",
  },
};
const stream = {
  headers: {
    "content-type": "application/octet-stream",
    "Access-Control-Allow-Origin": "*",
  },
};
const xml = {
  headers: {
    "content-type": "application/xml; charset=utf-8",
    "Access-Control-Allow-Origin": "*",
  },
};
const text = {
  headers: {
    "content-type": "text/plain; charset=utf-8",
    "Access-Control-Allow-Origin": "*",
  },
};
const Headers = {
  js,
  html,
  json,
  stream,
  xml,
  text,
};
export default Headers;
