import Space from "../../Space";
async function ErrorResponse(msg, status = 500) {
  return new Response(
    Space.Renderers.erorr.replace(/::ErrorInfo::/g, msg),
    {
      status: status,
      headers: Space.Helpers.Headers.html,
    }
  );
}
export default ErrorResponse;
