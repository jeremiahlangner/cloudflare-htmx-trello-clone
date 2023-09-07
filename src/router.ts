// An example 'toy' implementation of a router using URLPattern: https://developer.mozilla.org/en-US/docs/Web/API/URL_Pattern_API
type Method = "GET" | "PUT" | "POST" | "PATCH" | "DELETE" | "OPTIONS" | "HEAD";
type Handler = (args: any) => any;

type Route = {
  path: URLPattern;
  method: Method;
  handler: (params: { [key: string]: string }) => any;
};

export class Router {
  routes: Route[];

  constructor(routes: Route[] = []) {
    this.routes = routes;
  }

  register(path: string, handler: Handler, method: Method = "GET") {
    this.routes.push({
      path: new URLPattern({ pathname: path }),
      method,
      handler,
    });
  }

  handle(request: Request) {
    for (const route of this.routes) {
      if (route.method !== request.method) continue;
      const match = route.path.exec({
        pathname: new URL(request.url).pathname,
      });
      if (match) return route.handler(match.pathname.groups);
    }
    return new Response("Not found", { status: 404 });
  }
}
