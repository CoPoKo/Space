import Space from "../../Space";
async function Robots(that) {
  return new Response(Space.renderers.robots,Space.helpers.headers.text);
}
export default Robots;
