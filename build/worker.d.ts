/// <reference types="@cloudflare/workers-types" />
interface Environment {}
declare const _default: {
  fetch(request: Request, env: Environment, ctx: any): Promise<unknown>;
};
export default _default;
