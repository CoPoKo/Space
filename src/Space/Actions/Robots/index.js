import Space from "../../Space";
async function Robots(that) {
  return new Response(Space.Renderers.robots,Space.Helpers.Headers.text);
}
export default Robots;
