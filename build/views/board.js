import lists from "../data/list";
function Board(params) {
    const { request, ctx, env } = params;
    let template = ``;
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
export default Board;
