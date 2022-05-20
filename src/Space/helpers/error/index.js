import Space from "../../Space";
async function ErrorResponse(msg) {
  return new Response(
    Space.renderers.erorr.replace(/::ErrorInfo::/g, msg),
    Space.helpers.headers.html
  );
}
export default ErrorResponse;
