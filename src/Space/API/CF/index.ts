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
const header_cf = {
  "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.190 Safari/537.36 Edg/88.0.100.0",
  "X-Auth-Email": AUTHEMAIL,
  "X-Auth-Key": AUTHKEY,
  "Content-Type": "application/json",
}
export default {
  setSecurityLevel: function (lev: string): Promise<Response> {
    return fetch(new Request("https://api.cloudflare.com/client/v4/zones/" + ZONEID + "/settings/security_level", {
      method: "PATCH",
      headers: header_cf,
      body: '{"value":"' + lev + '"}'
    }));
  },
  setSchedule: function (cron: string): Promise<Response> {
    return fetch(new Request("https://api.cloudflare.com/client/v4/accounts/" + ACCOUNTID + "/workers/scripts/" + WORKERNAME + "/schedules", {
      method: "PUT",
      headers: header_cf,
      body: '[{"cron": "' + cron + '"}]'
    }));
  },
  getRoutes: function (): Promise<Response> {
    return fetch(new Request("https://api.cloudflare.com/client/v4/zones/" + ZONEID + "/workers/routes", {
      method: "GET",
      headers: header_cf,
    }));
  },
  deleteRouteById: function (id: string): Promise<Response> {
    return fetch(new Request("https://api.cloudflare.com/client/v4/zones/" + ZONEID + "/workers/routes/" + id, {
      method: "DELETE",
      headers: header_cf,
    }));
  },
  createRoute: function (): Promise<Response> {
    return fetch(new Request("https://api.cloudflare.com/client/v4/zones/" + ZONEID + "/workers/routes", {
      method: "POST",
      headers: header_cf,
      body: '{"pattern":"' + WORKERROUTE + '","script":"' + WORKERNAME + '"}'
    }));
  },
  getWorkersKVRequestAnalytics: function (type = "read"): Promise<Response> {
    return fetch(new Request("https://api.cloudflare.com/client/v4/accounts/" + ACCOUNTID + "/storage/analytics?metrics=requests&filters=requestType==" + type, {
      method: "GET",
      headers: header_cf
    }));
  },
  getWorkersRequestAnalytics: function (): Promise<Response> {
    return fetch(new Request("https://api.cloudflare.com/client/v4/graphql/", {
      method: "POST",
      headers: header_cf,
      body: JSON.stringify({
        "query": `{
          viewer {
            accounts(filter: {accountTag: "${ACCOUNTID}"}) {
              workersInvocationsAdaptive(filter: {datetime_gt: "${new Date(new Date().getTime() - (24 * 60 * 60 * 1000)).toISOString()}"}, limit: 2) {
                sum {
                  requests
                  subrequests
                }
              }
            }
          }
        }`,
      })
    }));
  },
  getFilters: function (): Promise<Response> {
    return fetch(new Request("https://api.cloudflare.com/client/v4/zones/" + ZONEID + "/filters", {
      method: "GET",
      headers: header_cf,
    }));
  },
  // 规则集API https://developers.cloudflare.com/ruleset-engine/rulesets-api/
  getHttpRequestLateTransform: function (): Promise<Response> {
    return fetch(new Request("https://api.cloudflare.com/client/v4/zones/" + ZONEID + "/rulesets/phases/http_request_late_transform/entrypoint", {
      method: "GET",
      headers: header_cf,
    }));
  },
  postRulesToRulesets: function (id: string, data: any): Promise<Response> {
    return fetch(new Request("https://api.cloudflare.com/client/v4/zones/" + ZONEID + "/rulesets/" + id + "/rules", {
      method: "POST",
      headers: header_cf,
      body: data,
    }));
  },
  patchRulesToRulesets: function (set_id: string, rule_id: string, data: any): Promise<Response> {
    return fetch(new Request("https://api.cloudflare.com/client/v4/zones/" + ZONEID + "/rulesets/" + set_id + "/rules/" + rule_id, {
      method: "PATCH",
      headers: header_cf,
      body: data,
    }));
  },
};

