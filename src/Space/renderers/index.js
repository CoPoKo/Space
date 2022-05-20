const { space_static_version, space_cdn, space_dns_prefetch } = require("../config")
import erorr from 'html-loader!./pages/error.html'
import auth from 'html-loader!./pages/auth.html'
import robots from 'html-loader!./pages/robots.txt'
import dash_index from 'html-loader!./pages/dash/dash_index.html'

function cdn(page) {
  page = page.replace(/::CDN::/g, space_cdn + "/@copoko/space-static@" + space_static_version)
  page = page.replace(/::PRECONNECT::/g, space_dns_prefetch)
  return page
}

let dash={
  index: cdn(dash_index),
}
let renderers = {
  erorr: cdn(erorr),
  auth: cdn(auth),
  robots: robots,
  dash: dash,
};
export default renderers;
