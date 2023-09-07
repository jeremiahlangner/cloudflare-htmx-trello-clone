// An example 'toy' implementation of a router using URLPattern: https://developer.mozilla.org/en-US/docs/Web/API/URL_Pattern_API
type Method = "GET" | "PUT" | "POST" | "PATCH" | "DELETE" | "OPTIONS" | "HEAD";
type Handler = (params: { request: Request; ctx: any; env: any }) => any;

type Route = {
  path: URLPattern;
  method: Method;
  handler: Handler;
};

export class Router {
  routes: Route[];

  constructor(routes: [string, Handler, Method?][] = []) {
    this.routes = [];

    for (const route of routes) {
      this.register(...route);
    }
  }

  register(path: string, handler: Handler, method: Method = "GET") {
    this.routes.push({
      path: new URLPattern({ pathname: path }),
      method,
      handler,
    });
  }

  handle(params: { request: Request; ctx: any; env: any }) {
    const { request } = params;

    for (const route of this.routes) {
      if (route.method !== request.method) continue;
      const match = route.path.exec({
        pathname: new URL(request.url).pathname,
      });
      if (match) return route.handler(params);
    }
    return new Response("Not found", { status: 404 });
  }
}
