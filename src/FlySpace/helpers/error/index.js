import FlySpace from "../../FlySpace";
async function ErrorResponse(msg) {
  return new Response(
    FlySpace.renderers.erorr.replace(/::ErrorInfo::/g, msg),
    FlySpace.helpers.headers.html
  );
}
export default ErrorResponse;
