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
import Space from "../../../../Space";
import HandleMessage from "../../HandleMessage";

const DNSQuery = async (that: HandleMessage) => {
  const opt: any = {}
  opt.type = that.args.t || "A"
  opt.name = that.args.n || "github.com"
  opt.edns_client_subnet = that.args.et || `1.0.0.1`
  opt.upstream = that.args.u || "cloudflare"
  opt.way = "get"
  opt.host = "true"
  opt.parse = "info"
  const ans = await Space.API.DNSQuery(opt);
  return that.ctx.reply(ans);
};

export default DNSQuery;
