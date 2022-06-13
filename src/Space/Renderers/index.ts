import { space_static_version, space_npm_cdn, space_gh_cdn } from "../Config"
import Version from "../API/Version"
import { dash_nav } from "./Pages/dash/dash_nav"
const erorr = require('./Pages/error.html').default
const auth = require('./Pages/auth.html').default
const dash_father = require('./Pages/dash/dash.html').default
const ipfs = require('./Pages/ipfs.html').default
const api = require('./Pages/api.html').default
const TreeHollow = require('./Pages/TreeHollow.html').default
const version = Version()

function makeVersion(page: string) {
  page = page.replace(/<\/body>/, `<script>console.log("CoPoKo Space v${version}")</script><\/body>`)
  return page
}

function cdn(page: string) {
  page = makeVersion(page)
  page = page.replace(/::CDN_SPACE::/g, space_npm_cdn + "/@copoko/space-static@" + space_static_version)
  page = page.replace(/::CDN_NPM::/g, space_npm_cdn)
  page = page.replace(/::CDN_GH::/g, space_gh_cdn)
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
