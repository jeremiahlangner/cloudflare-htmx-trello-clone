import { Router } from "simple-worker-router";
import { NoSW } from "./templates/mixins";
import { HTMLResponse, JSONResponse } from "./util";
import { Environment, HandlerArgs } from "./types";
import ServiceWorker from "./service-worker";
import { resetData, jsonHandler } from "./handlers";

export default {
  async fetch(request: Request, env: Environment, ctx: any) {
    const router = new Router([
      ["/", async (args) => HTMLResponse(NoSW)],
      ["/sw.js", ServiceWorker],
      [
        "/db/:key",
        async (args) => {
          return JSONResponse(await jsonHandler(args as HandlerArgs));
        },
      ],
      [
        "/db/:key",
        async (args: any) => {
          const body = await args.request.json();
          env.TrelloLists.put(
            args.route.pathname.groups.key,
            JSON.stringify(body),
          );
          return JSONResponse(await jsonHandler(args as HandlerArgs));
        },
        "POST",
      ],
    ]);
    return router.handle({ request, env, ctx });
  },
  async scheduled(event: any, env: Environment, ctx: ExecutionContext) {
    return resetData({ event, env, ctx });
  },
};
