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
import Router from "../../Helpers/Router";

async function CDN(ctx: Router) {
  const request = ctx.event.request;
  const url = new URL(request.url);
  const path = url.href.substr(url.origin.length);
  console.log(path);

  // cache here
  const cacheUrl = new URL(request.url);
  // Construct the cache key from the cache URL
  const cacheKey = new Request(cacheUrl.toString(), request);
  const cache = caches.default;
  // Check whether the value is already available in the cache
  // if not, you will need to fetch it from origin, and store it in the cache
  // for future access
  let response = await cache.match(cacheKey);
  if (!response) {
    console.log(
      `Response for request url: ${request.url} not present in cache. Fetching and caching request.`
    );

    if (path.startsWith('/npm/')) {
      url.hostname = 'unpkg.com'
      let method = request.method;
      let request_headers = request.headers;
      let new_request_headers = new Headers(request_headers);
      new_request_headers.set('Host', url.hostname);
      new_request_headers.set('Referer', url.href);
      let fetchUrl = url.toString().replace('/npm/', '/')
      let a = await fetch(fetchUrl, {
        method: method,
        headers: new_request_headers
      });
      response = await NewResponse(a);
    } else if (path.startsWith('/twemoji/')) {
      url.hostname = 'twemoji.maxcdn.com'
      let method = request.method;
      let request_headers = request.headers;
      let new_request_headers = new Headers(request_headers);
      new_request_headers.set('Host', url.hostname);
      new_request_headers.set('Referer', url.href);
      let fetchUrl = url.toString().replace('/twemoji/', '/')
      let a = await fetch(fetchUrl, {
        method: method,
        headers: new_request_headers
      });
      response = await NewResponse(a);
    } else if (path.startsWith('/gitraw/')) {
      url.hostname = 'raw.githubusercontent.com'
      let method = request.method;
      let request_headers = request.headers;
      let new_request_headers = new Headers(request_headers);
      new_request_headers.set('Host', url.hostname);
      new_request_headers.set('Referer', url.href);
      let fetchUrl = url.toString().replace('/gitraw/', '/')
      let a = await fetch(fetchUrl, {
        method: method,
        headers: new_request_headers
      });
      response = await NewResponse(a);
    } else if (path.startsWith('/gist/')) {
      url.hostname = 'gist.github.com'
      let method = request.method;
      let request_headers = request.headers;
      let new_request_headers = new Headers(request_headers);
      new_request_headers.set('Host', url.hostname);
      new_request_headers.set('Referer', url.href);
      let fetchUrl = url.toString().replace('/gist/', '/')
      let a = await fetch(fetchUrl, {
        method: method,
        headers: new_request_headers
      });
      response = await NewResponse(a);
    } else {
      url.hostname = 'fastly.jsdelivr.net'
      let method = request.method;
      let request_headers = request.headers;
      let new_request_headers = new Headers(request_headers);
      new_request_headers.set('Host', url.hostname);
      new_request_headers.set('Referer', url.href);
      let a = await fetch(url.toString(), {
        method: method,
        headers: new_request_headers
      });
      response = await NewResponse(a);
    }


    // Cache API respects Cache-Control headers. Setting s-max-age to 1 year
    // will limit the response to be in cache for 1 year max
    // Any changes made to the response here will be reflected in the cached value
    response.headers.append('Cache-Control', 's-maxage=' + 60 * 60 * 24 * 365);

    // Store the fetched response as cacheKey
    // Use waitUntil so you can return the response without blocking on
    // writing to cache
    ctx.event.waitUntil(cache.put(cacheKey, response.clone()));
  } else {
    console.log(`Cache hit for: ${request.url}.`);
  }
  return response;
}

export default CDN;

async function NewResponse(original_response: Response) {
  let bd = await original_response.arrayBuffer()
  let response_headers = original_response.headers;
  let status = original_response.status;
  let new_response_headers = new Headers(response_headers);
  new_response_headers.set('Access-Control-Allow-Origin', '*');
  new_response_headers.set('Access-Control-Allow-Method', '*');
  new_response_headers.set('Access-Control-Allow-Headers', 'Content-Type');
  new_response_headers.set('Access-Control-Max-Age', '3600');
  new_response_headers.set('Access-Control-Allow-Credentials', "true");
  new_response_headers.delete('content-security-policy');
  new_response_headers.delete('content-security-policy-report-only');
  new_response_headers.delete('clear-site-data');

  return new Response(bd, {
    status,
    headers: new_response_headers
  });
}