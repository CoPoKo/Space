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
async function get(request: Request, key: string) {
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
async function set(response: Response, key: string, value: string, path = "/") {
  response.headers.append("Set-Cookie", `${key}=${value}; path=${path};Max-Age=86400`);
  return response;
}
const Cookie = {
  set,
  get,
};
export default Cookie;
