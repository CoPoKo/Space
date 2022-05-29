import Space from "../../Space";
import { dash_nav } from "../../Renderers/Pages/dash/dash_nav";

function BuildPageDash(ctx: any) {
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
