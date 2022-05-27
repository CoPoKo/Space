import handleSpace from "./Space";
import handleScheduled from "./Space/Scheduled";

addEventListener("fetch", (event) => {
  event.respondWith(
    handleSpace(event).catch(
      (err) => new Response(err.stack, { status: 500 })
    )
  );
});

addEventListener('scheduled', async event => {
  event.waitUntil(handleScheduled(event))
})