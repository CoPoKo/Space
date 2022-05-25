import Space from "../../Space";

function BuildPageDash(ctx) {
  return new Response(
    Space.Renderers.dash[ctx.status.path.replace("/space/dash/", "")],
    Space.Helpers.Headers.html
  );
}

const { dash_nav } = require("../../Renderers/Pages/dash/dash_nav.js");

let Dash = {};
dash_nav.forEach(item => {
  Dash[item] = BuildPageDash;
})

export default Dash;
