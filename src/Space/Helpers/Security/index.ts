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
import Space from "../../Space";
function checkReferer(event: FetchEvent) {
  const referer = event.request.headers.get('referer');
  if (referer == null) {
    return true
  }
  if (referer && (referer.includes(MY_REFERER) || referer.includes("localhost") || referer.includes("127"))) {
    return true
  }
  return false
}

async function securityCheckAnalytics(_event: FetchEvent) {
  // Workers KV 免费包含
  // 1 GB - 键值存储空间
  // 100,000 - 每日键值读取*
  // 1,000 - 每日键值写入*
  // 1,000 - 每日键值删除
  // 1,000 - 每日键值列表
  // 支持最大 512 Bytes 的键
  // 支持最大 25 MB 的值
  const kv_read = await Space.API.CF.getWorkersKVRequestAnalytics("read").then(e => e.json()).then((e: any) => e.result)
  await setUnderAttack(kv_read?.totals?.requests, 30000, 35000)
  const kv_write = await Space.API.CF.getWorkersKVRequestAnalytics("write").then(e => e.json()).then((e: any) => e.result)
  await setUnderAttack(kv_write?.totals?.requests, 250, 350)
  // Workers 每日 100,000 Request
  const workers = await Space.API.CF.getWorkersRequestAnalytics().then(e => e.json()).then((e: any) => e.data).then(e => e?.viewer?.accounts[0]?.workersInvocationsAdaptive[0]?.sum?.requests)
  await setUnderAttack(workers, 35000, 40000)
}
async function setUnderAttack(a: number, b: number, c: number) {
  if (!a) {
    return
  }
  if (a > b) {
    await Space.API.CF.setSecurityLevel("under_attack")
    await Space.Helpers.Notify.Warning(`Under Attack`, "Your account is under attack")
  }
  if (a > c) {
    const routesresult = await Space.API.CF.getRoutes().then((e: any) => e.json()).then(e => e.result)
    const routeid = routesresult.find((e: any) => e.script == WORKERNAME)?.id
    if (routeid) {
      await Space.API.CF.deleteRouteById(routeid)
      await Space.Helpers.Notify.Warning(`Under Attack`, "The worker route has been deleted")
    }
  }
}

const Security = {
  checkReferer,
  securityCheckAnalytics,
};
export default Security;
