import Space from "../../Space";

function BuildPageDash(that) {
  return new Response(
    Space.renderers.dash[that.status.path.replace("/space/dash/", "")],
    Space.helpers.headers.html
  );
}

const { dash_nav } = require("../../renderers/pages/dash/dash_nav.js");

let Dash = {};
dash_nav.forEach(item => {
  Dash[item] = BuildPageDash;
})

export default Dash;
