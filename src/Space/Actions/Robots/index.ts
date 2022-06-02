import Space from "../../Space";
async function Robots() {
  return new Response(`User-agent: * \nDisallow: /`, Space.Helpers.Headers.text);
}
export default Robots;
