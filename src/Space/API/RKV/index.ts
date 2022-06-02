import Space from "../../Space";
import CF from "../CF";
async function getMeta() {
  let ruleSet = await CF.getHttpRequestLateTransform().then(e => { return e.json() }).then((e: any) => {
    return {
      id: e?.result?.id,
      rules: e?.result?.rules
    }
  })
  let rule = ruleSet.rules.find((e: any) => e.description === "Ruleset KV")
  if (!rule) {
    await CF.postRulesToRulesets(ruleSet.id, JSON.stringify({
      "action": "rewrite",
      "action_parameters": {
        "headers": {
          "X-RKV-IP": {
            "operation": "set",
            "expression": "ip.src"
          },
        }
      },
      "expression": "(http.cookie eq \"RKV-IPFS-QmbJWAESqCsf4RFCqEY7jecCashj8usXiyDNfKtZCwwzGb-RKV-IPFS\")",
      "description": "Ruleset KV",
      "enabled": false
    }))
    ruleSet = await CF.getHttpRequestLateTransform().then(e => { return e.json() }).then((e: any) => {
      return {
        id: e?.result?.id,
        rules: e?.result?.rules
      }
    })
    rule = ruleSet.rules.find((e: any) => e.description === "Ruleset KV")
  }
  const Hash = rule.expression.match(/RKV-IPFS-(.*)-RKV-IPFS/i)[1]
  const meta = await Space.API.IPFS.Get(Hash).then(e => { return e.json() })
  return {
    setId: ruleSet.id,
    ruleId: rule.id,
    meta: meta,
  }
}
async function patchRulesetKVRule(meta: any, setId: string, ruleId: string) {
  const hash = await Space.API.IPFS.Put(JSON.stringify(meta)).then(e => { return e.json() }).then((e: any) => { return e.Hash })
  await CF.patchRulesToRulesets(setId, ruleId, JSON.stringify({
    "action": "rewrite",
    "action_parameters": {
      "headers": {
        "X-RKV-IP": {
          "operation": "set",
          "expression": "ip.src"
        },
      }
    },
    "expression": "(http.cookie eq \"RKV-IPFS-" + hash + "-RKV-IPFS\")",
    "description": "Ruleset KV",
    "enabled": false
  }))
}

const RKV = {
  Put: async (key: string, value: string) => {
    const M = await getMeta()
    const meta = M.meta
    meta[key] = value
    await patchRulesetKVRule(meta, M.setId, M.ruleId)
  },
  Delete: async (key: string) => {
    const M = await getMeta()
    const meta = M.meta
    delete meta[key]
    await patchRulesetKVRule(meta, M.setId, M.ruleId)
  },
  Get: async (key: string) => {
    const M = await getMeta()
    const meta = M.meta
    if (meta[key]) {
      return meta[key]
    } else {
      return null
    }
  }
};
export default RKV;
