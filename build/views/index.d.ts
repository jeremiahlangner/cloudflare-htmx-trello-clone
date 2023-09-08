/// <reference types="@cloudflare/workers-types" />
declare function index(params: {
    request: Request;
    ctx: any;
    env: any;
}): Response;
export default index;
