import Space from "../../Space";
async function ErrorResponse(msg, status = 500, headers = false) {
  if (!headers) {
    headers = Space.Helpers.Headers.html
  }
  return new Response(
    Space.Renderers.erorr.replace(/::ErrorInfo::/g, msg),
    Object.assign({
      status: status,
    }, headers)
  );
}
export default ErrorResponse;
