import Space from "../../Space";
async function ErrorResponse(msg) {
  return new Response(
    Space.Renderers.erorr.replace(/::ErrorInfo::/g, msg),
    Space.Helpers.Headers.html
  );
}
export default ErrorResponse;
