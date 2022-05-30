import Space from "../../Space";
import { dash_nav } from "../../Renderers/Pages/dash/dash_nav";
import Router from "../../Helpers/Router";

function BuildPageDash(ctx: Router) {
  return new Response(
    Space.Renderers.dash[ctx.status.path.replace("/space/dash/", "")],
    Space.Helpers.Headers.html
  );
}

const Dash = {};
dash_nav.forEach((item: string) => {
  Dash[item] = BuildPageDash;
})

export default Dash;
