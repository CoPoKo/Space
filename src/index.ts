import handleSpace from "./Space";
import handleScheduled from "./Space/Scheduled";

addEventListener("fetch", (event: FetchEvent) => {
  event.respondWith(
    handleSpace(event).catch((err: { stack: BodyInit; }) => new Response(err.stack, { status: 500 }))
  );
});

addEventListener('scheduled', async (event: ScheduledEvent) => {
  event.waitUntil(handleScheduled(event))
})
