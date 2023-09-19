function html(strings: TemplateStringsArray, ...values: any[]): string {
  return String.raw({ raw: strings }, ...values);
}

// TODO: add hashes to kv data to prevent collisions
function hash(_hashes: { [key: string]: string }): string {
  let h: string = "";
  do {
    h = Math.random().toString(16).substring(2, 15);
  } while (_hashes[h]);
  return h;
}

async function HTMLResponse(response: string): Promise<Response> {
  return new Response(response, {
    headers: {
      "content-type": "text/html;charset=UTF-8",
    },
  });
}

async function JSONResponse(response: string | any): Promise<Response> {
  if (typeof response !== 'string') response = JSON.stringify(response);
  return new Response(response, {
    headers: {
      "content-type": "application/json",
    },
  });
}


export { hash, html, HTMLResponse, JSONResponse };
