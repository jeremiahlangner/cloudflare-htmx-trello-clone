function Board(params: { request: Request; ctx: any; env: any }) {
  const { request, ctx, env } = params;

  const lists: any[] = []; // replace with parameter from lists.

  for (const list of lists) {
    const listTemplate = `
<div class="list" draggable="true">
  <div class="list-title" id="${list.name}"></div>
</div>
  `;
  }
}

export default Board;
