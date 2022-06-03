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
const DecryptMd5: (md5: string) => Promise<string> = async (md5) => {
  if (md5) {
    // https://md5.gromweb.com/?md5=eb62f6b9306db575c2d596b1279627a4
    const MD5FetchURL = "https://md5.gromweb.com/?md5=" + md5
    return await fetch(MD5FetchURL, {
      method: "GET",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko)",
        "X-Forwarded-For": "192.168.1.1"
      }
    })
      .then(e => e.text())
      .then(e => /<em class=\"long-content\ string\">(.*)<\/em>/.exec(e))
      .then(e => {
        if (e)
          return e[1]
        else
          return "Not Found"
      })
  }
  return "null"
}


export default DecryptMd5;
