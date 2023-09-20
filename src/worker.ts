import { Router } from "simple-worker-router";
import { NoSW } from "./templates/mixins";
import { HTMLResponse, JSONResponse } from "./util";
import { Environment, HandlerArgs } from "./types";
import ServiceWorker from "./service-worker";
import { resetData, jsonHandler } from "./handlers";

const router = new Router([
  ["/", async () => HTMLResponse(NoSW)],
  ["/sw.js", ServiceWorker],
  [
    "/db/:key",
    async (args) => JSONResponse(await jsonHandler(args as HandlerArgs)),
  ],
  [
    "/db/:key",
    async (args) => {
      const body = await args.request.json();
      args.env.TrelloLists.put(
        args.route.pathname.groups.key,
        JSON.stringify(body),
      );
      return JSONResponse(await jsonHandler(args as HandlerArgs));
    },
    "POST",
  ],
]);

export default {
  async fetch(request: Request, env: Environment, ctx: ExecutionContext) {
    return router.handle({ request, env, ctx });
  },
  async scheduled(event: any, env: Environment, ctx: ExecutionContext) {
    return resetData({ event, env, ctx });
  },
};
