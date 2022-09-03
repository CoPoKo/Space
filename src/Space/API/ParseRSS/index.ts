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
import Parser = require('rss-parser');
const parser = new Parser();
async function ParseRSS(url: string): Promise<{ [key: string]: any; } & Parser.Output<{ [key: string]: any; }>> {
  return fetch(url).then(res => res.text()).then(e => { return parser.parseString(e) })
}
export default ParseRSS;
// 注；这个破函数在定时任务 ScheduledEvent 中会超时 FetchEvent不会超时