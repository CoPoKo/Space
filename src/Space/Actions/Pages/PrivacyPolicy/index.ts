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
import Router from "../../../Helpers/Router";
import Space from "../../../Space"

async function PrivacyPolicy(ctx: Router): Promise<Response> {
  const path = ctx.pathname
  if (path.startsWith('/apisource')) {
    return Response.redirect(`https://github.com/CoPoKo/Space`, 301)
  }
  if (path.startsWith('/privacy-policy')) {
    const page = await fetch("https://raw.githubusercontent.com/MHG-LAB/pages/main/me/privacy-policy.html").then(res => res.text())
    return new Response(page, Space.Helpers.Headers.html);
  }
  if (path.startsWith('/contact')) {
    const page = await fetch("https://raw.githubusercontent.com/MHG-LAB/pages/main/me/contact.html").then(res => res.text())
    return new Response(page, Space.Helpers.Headers.html);
  }
}
export default PrivacyPolicy;
