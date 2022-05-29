async function get(request: any, key: any) {
  const cookie = request.headers.get("Cookie");
  // No cookie found
  if (!cookie) return "";
  // Search for the cookie key in the header.
  const search = `${key}=`;
  const starts = cookie.indexOf(search);
  // The cookie could not be found.
  if (starts === -1) return "";
  // Parse the cookie value.
  const value = cookie.substring(starts + search.length, cookie.length);
  const end = value.indexOf(";");
  return end === -1 ? value : value.substring(0, end);
}
async function set(response: any, key: any, value: any, path = "/") {
  response.headers.append("Set-Cookie", `${key}=${value}; path=${path};Max-Age=86400`);
  return response;
}
const Cookie = {
  set,
  get,
};
export default Cookie;