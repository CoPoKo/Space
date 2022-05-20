import FlySpace from "../../FlySpace";
async function Robots(that) {
  return new Response(FlySpace.renderers.robots,FlySpace.helpers.headers.text);
}
export default Robots;
