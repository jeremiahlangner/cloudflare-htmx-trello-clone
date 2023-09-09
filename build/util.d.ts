/// <reference types="@cloudflare/workers-types" />
declare function hash(_hashes: {
    [key: string]: string;
}): string;
declare function HTMLResponse(response: string): Promise<Response>;
export { hash, HTMLResponse };
