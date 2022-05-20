import FlySpace from "../../FlySpace";

async function PageDashIndex(that) {
  return new Response(
    FlySpace.renderers.dash.index,
    FlySpace.helpers.headers.html
  );
}

let Dash = {
  PageDashIndex: PageDashIndex,
};
export default Dash;
