const js: any = {
  headers: {
    "content-type": "application/javascript; charset=utf-8",
    "Access-Control-Allow-Origin": "*",
  },
};
const html: any = {
  headers: {
    "content-type": "text/html; charset=utf-8",
    "Access-Control-Allow-Origin": "*",
  },
};
const json: any = {
  headers: {
    "content-type": "application/json; charset=utf-8",
    "Access-Control-Allow-Origin": "*",
  },
};
const stream: any = {
  headers: {
    "content-type": "application/octet-stream",
    "Access-Control-Allow-Origin": "*",
  },
};
const xml: any = {
  headers: {
    "content-type": "application/xml; charset=utf-8",
    "Access-Control-Allow-Origin": "*",
  },
};
const text: any = {
  headers: {
    "content-type": "text/plain; charset=utf-8",
    "Access-Control-Allow-Origin": "*",
  },
};

const Headers: any = {
  js,
  html,
  json,
  stream,
  xml,
  text,
};
export default Headers;
