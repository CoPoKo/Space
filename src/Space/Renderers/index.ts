import { space_static_version, space_cdn, space_dns_prefetch } from "../Config"
import { dash_nav } from "./Pages/dash/dash_nav"
const erorr = require('./Pages/error.html').default
const auth = require('./Pages/auth.html').default
const dash_father = require('./Pages/dash/dash.html').default
const ipfs = require('./Pages/ipfs.html').default
const api = require('./Pages/api.html').default
const TreeHollow = require('./Pages/TreeHollow.html').default

function cdn(page: string) {
  page = page.replace(/::CDN_SPACE::/g, space_cdn + "/@copoko/space-static@" + space_static_version)
  page = page.replace(/::CDN::/g, space_cdn)
  page = page.replace(/::PRECONNECT::/g, space_dns_prefetch)
  return page
}

let dash_nav_html = ""
dash_nav.forEach(item => {
  dash_nav_html += require(`./Pages/dash/${item}/nav-item.html`).default
})

function DashPage(nav: string) {
  let page = dash_father.replace(/::DASH_NAV::/g, dash_nav_html)
  page = page.replace(/::DASH_CONTENT::/g, require(`./Pages/dash/${nav}/content.html`).default)
  page = page.replace(/::DASH_BODYEND::/g, require(`./Pages/dash/${nav}/bodyend.html`).default)
  page = page.replace(/::DASH_UTIL::/g, require(`./Pages/dash/dash_util.html`).default)
  return page
}

const dash = {}
dash_nav.forEach(item => {
  dash[item] = cdn(DashPage(item))
})

const Renderers = {
  dash: dash,
  erorr: cdn(erorr),
  auth: cdn(auth),
  ipfs: cdn(ipfs),
  api: cdn(api),
  TreeHollow: cdn(TreeHollow),
};
export default Renderers;
