import Space from "../../Space";

async function PageDashIndex(that) {
  return new Response(
    Space.renderers.dash.index,
    Space.helpers.headers.html
  );
}

let Dash = {
  PageDashIndex: PageDashIndex,
};
export default Dash;
