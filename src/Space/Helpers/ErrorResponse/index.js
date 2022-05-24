import Space from "../../Space";
async function ErrorResponse(msg, status = 500) {
  return new Response(
    Space.Renderers.erorr.replace(/::ErrorInfo::/g, msg),
    Object.assign({
      status: status,
    }, Space.Helpers.Headers.html)
  );
}
export default ErrorResponse;
