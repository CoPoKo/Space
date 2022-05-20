import handleFlySpace from "./FlySpace";

addEventListener("fetch", (event) => {
  event.respondWith(handleFlySpace(event));
});
