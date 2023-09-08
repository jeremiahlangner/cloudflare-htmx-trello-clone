/// <reference types="@cloudflare/workers-types" />
declare function Board(params: {
    request: Request;
    ctx: any;
    env: any;
}): void;
export default Board;
