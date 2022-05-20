import erorr from 'html-loader!./pages/error.html'
import auth from 'html-loader!./pages/auth.html'
import robots from 'html-loader!./pages/robots.txt'
import dash_index from 'html-loader!./pages/dash/dash_index.html'

let dash={
  index: dash_index,
}
let renderers = {
  erorr: erorr,
  auth: auth,
  robots: robots,
  dash: dash,
};
export default renderers;
