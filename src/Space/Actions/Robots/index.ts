import Space from "../../Space";
async function Robots(_ctx: any) {
  return new Response(Space.Renderers.robots, Space.Helpers.Headers.text);
}
export default Robots;
