import handleSpace from "./Space";

addEventListener("fetch", (event) => {
  event.respondWith(
    handleSpace(event).catch(
      (err) => new Response(err.stack, { status: 500 })
    )
  );
});