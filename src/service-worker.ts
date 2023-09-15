import json from "./templates/sw.json" assert { type: "json" };

function ServiceWorker() {
  return new Response(json.sw, {
    headers: {
      "content-type": "text/javascript;charset=UTF-8",
    },
  });
}

export default ServiceWorker;
