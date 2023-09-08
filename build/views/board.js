function Board(params) {
    const { request, ctx, env } = params;
    const lists = [{
            name: 'testing'
        }]; // replace with parameter from lists.
    for (const list of lists) {
        const listTemplate = `
<div class="list" draggable="true">
  <div class="list-title" id="${list.name}"></div>
</div>
  `;
    }
}
export default Board;
