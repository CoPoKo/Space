import Space from "../../Space";
async function ErrorResponse(msg: string, status: number = 500, headers = Space.Helpers.Headers.html) {
  return new Response(
    Space.Renderers.erorr.replace(/::ErrorInfo::/g, msg),
    Object.assign({
      status: status,
    }, headers)
  );
}
export default ErrorResponse;
