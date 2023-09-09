import { IconPlus } from "./mixins";
function ToggleAddCard(params) {
    const { list } = params;
    return `
<button 
  class="toggle-add-card"
  id="btn-add-card-${list.id}"
  type="button" 
  _="on click toggle .hidden on me toggle .hidden on #add-card-${list.id}"
  >
  ${IconPlus}
  <span> Add another card</span>
</button>
`;
}
export default ToggleAddCard;
