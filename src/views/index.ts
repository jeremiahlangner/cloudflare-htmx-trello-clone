import Board from "./board";

function index(params: { request: Request; ctx: any; env: any }) {
  const { request, ctx, env } = params;

  const template = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Serverless Trello in HTMX</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <div class="app">
      <div class="header">
        htmx Trello Clone
      </div>

      <form hx-post="/cards/move" hx-trigger="cardmoved" hx-target="#board">
        <input id="fromList type="hidden" name="from">
        <input id="toList" type="hidden" name="to">
        <input id="movedCard" type="hidden" name="movedCard">
        <div id="board" class="board sortable">
          ${Board({ request, ctx, env })}
        </div>
      </form>
      
    </div>
    <script src="https://unpkg.com/htmx.org"></script>
    <script src="https://unpkg.com/hyperscript.org"></script>
    <script src="https://raw.githack.com/SortableJS/Sortable/master/Sortable.js"></script>
    <script>
      htmx.onLoad(function(content) {
        let sortables = content.querySelectorAll(".sortable");
        for(const sortable of sortables) {
          new Sortable(sortable, {
            animation: 150,
            group: 'shared'
          });
        }
      });
  </body>
</html>
  `;

  return new Response(template, {
    headers: {
      "content-type": "text/html;charset=UTF-8",
    },
  });
}

export default index;
