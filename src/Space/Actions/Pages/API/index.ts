import Router from "../../../Helpers/Router";
import Space from "../../../Space"

async function API(ctx: Router) {
  return new Response(Space.Renderers.api, Space.Helpers.Headers.html)
}
export default API;
