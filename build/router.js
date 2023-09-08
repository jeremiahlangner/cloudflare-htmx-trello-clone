export class Router {
    routes;
    constructor(routes = []) {
        this.routes = [];
        for (const route of routes) {
            this.register(...route);
        }
    }
    register(path, handler, method = "GET") {
        this.routes.push({
            path: new URLPattern({ pathname: path }),
            method,
            handler,
        });
    }
    handle(params) {
        const { request } = params;
        for (const route of this.routes) {
            if (route.method !== request.method)
                continue;
            const match = route.path.exec({
                pathname: new URL(request.url).pathname,
            });
            if (match)
                return route.handler(params);
        }
        return new Response("Not found", { status: 404 });
    }
}
