const { space_static_version, space_cdn, space_dns_prefetch } = require("../Config")
import erorr from 'html-loader!./Pages/error.html'
import auth from 'html-loader!./Pages/auth.html'
import robots from 'html-loader!./Pages/robots.txt'
import dash_father from 'html-loader!./Pages/dash/dash.html'
import ipfs from 'html-loader!./Pages/ipfs.html'

function cdn(page) {
  page = page.replace(/::CDN_SPACE::/g, space_cdn + "/@copoko/space-static@" + space_static_version)
  page = page.replace(/::CDN::/g, space_cdn)
  page = page.replace(/::PRECONNECT::/g, space_dns_prefetch)
  return page
}

const { dash_nav } = require("./Pages/dash/dash_nav.js")

let dash_nav_html = ""
dash_nav.forEach(item => {
  dash_nav_html += require(`html-loader!./Pages/dash/${item}/nav-item.html`)
})

function DashPage(nav) {
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
  robots: robots,
  dash: dash,
};
export default Renderers;
