import { Handler } from "simple-worker-router";

function Board(params: { request: Request; ctx: any; env: any }): string {
  const { request, ctx, env } = params;
  let template = ``;

  const lists: any[] = [{
    name: 'testing'
  }, {
    name: 'testing 2'
  }, {
    name: 'testing 2'
  }]; // replace with parameter from lists.

  for (const list of lists) {
    const listTemplate = `
<div class="list" draggable="true">
  <div class="list-title" id="${list.name}">${list.name}</div>
</div>
  `;
    template += listTemplate;
  }

  return template;
}

export default Board as Handler;
