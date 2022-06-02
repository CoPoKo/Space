import { space_static_version, space_cdn, space_dns_prefetch } from "../Config"
import { dash_nav } from "./Pages/dash/dash_nav"
const erorr = require('html-loader!./Pages/error.html')
const auth = require('html-loader!./Pages/auth.html')
const robots = require('html-loader!./Pages/robots.txt')
const dash_father = require('html-loader!./Pages/dash/dash.html')
const ipfs = require('html-loader!./Pages/ipfs.html')
const api = require('html-loader!./Pages/api.html')

function cdn(page: string) {
  page = page.replace(/::CDN_SPACE::/g, space_cdn + "/@copoko/space-static@" + space_static_version)
  page = page.replace(/::CDN::/g, space_cdn)
  page = page.replace(/::PRECONNECT::/g, space_dns_prefetch)
  return page
}

let dash_nav_html = ""
dash_nav.forEach(item => {
  dash_nav_html += require(`html-loader!./Pages/dash/${item}/nav-item.html`)
})

function DashPage(nav: string) {
  let page = dash_father.replace(/::DASH_NAV::/g, dash_nav_html)
  page = page.replace(/::DASH_CONTENT::/g, require(`html-loader!./Pages/dash/${nav}/content.html`))
  page = page.replace(/::DASH_BODYEND::/g, require(`html-loader!./Pages/dash/${nav}/bodyend.html`))
  page = page.replace(/::DASH_UTIL::/g, require(`html-loader!./Pages/dash/dash_util.html`))
  return page
}

const dash = {}
dash_nav.forEach(item => {
  dash[item] = cdn(DashPage(item))
})

const Renderers = {
  erorr: cdn(erorr),
  auth: cdn(auth),
  ipfs: cdn(ipfs),
  api: cdn(api),
  robots: robots,
  dash: dash,
};
export default Renderers;
