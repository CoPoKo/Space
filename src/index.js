import handleSpace from "./Space";

addEventListener("fetch", (event) => {
  event.respondWith(handleSpace(event));
});
