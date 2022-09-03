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

export default {
  js,
  html,
  json,
  stream,
  xml,
  text,
};
