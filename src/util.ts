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

async function HTMLResponse(response: string) {
  return new Response(minify(response), {
    headers: {
      "content-type": "text/html;charset=UTF-8",
    },
  });
}

export { hash, html, HTMLResponse };
