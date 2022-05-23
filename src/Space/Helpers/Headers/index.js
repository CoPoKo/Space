const headers_js = {
  headers: {
    "content-type": "application/javascript; charset=utf-8",
    "Access-Control-Allow-Origin": "*",
  },
};
const headers_html = {
  headers: {
    "content-type": "text/html; charset=utf-8",
    "Access-Control-Allow-Origin": "*",
  },
};
const headers_json = {
  headers: {
    "content-type": "application/json; charset=utf-8",
    "Access-Control-Allow-Origin": "*",
  },
};
const headers_stream = {
  headers: {
    "content-type": "application/octet-stream",
    "Access-Control-Allow-Origin": "*",
  },
};
const headers_xml = {
  headers: {
    "content-type": "application/xml; charset=utf-8",
    "Access-Control-Allow-Origin": "*",
  },
};
const headers_text = {
  headers: {
    "content-type": "text/plain; charset=utf-8",
    "Access-Control-Allow-Origin": "*",
  },
};
let Headers = {
  js: headers_js,
  html: headers_html,
  json: headers_json,
  stream: headers_stream,
  xml: headers_xml,
  text: headers_text,
};
export default Headers;
