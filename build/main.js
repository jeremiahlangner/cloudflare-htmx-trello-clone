// src/router/router.ts
var Router = class {
  routes;
  constructor(routes = []) {
    this.routes = routes;
  }
  register(path, handler, method = "GET") {
    this.routes.push({
      path: new URLPattern({ pathname: path }),
      method,
      handler
    });
  }
  handle(request) {
    for (const route of this.routes) {
      if (route.method !== request.method)
        continue;
      const match = route.path.exec({
        pathname: new URL(request.url).pathname
      });
      if (match)
        return route.handler(match.pathname.groups);
    }
    return new Response("Not found", { status: 404 });
  }
};

// src/main.ts
function main(request) {
  const router = new Router();
  router.register(
    "/hello/:name",
    (params) => new Response(`Hello ${params.name}`)
  );
  router.handle(request);
}
var main_default = main;
export {
  main_default as default
};
