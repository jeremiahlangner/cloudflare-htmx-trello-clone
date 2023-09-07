import { Router } from "./router";
import AddList from './views/add_list';
import NewList from './views/new_list';

const lists = [
  {
    name: 'To Do',
    id: 1,
    cards: [
      {
        id: 1,
        label: 'First Card',
        list: 1
      },
      {
        id: 2,
        label: 'Second Card',
        list: 1
      },
    ]
  },
  {
    name: 'Doing',
    id: 2,
    cards: [
      {
        id: 3,
        label: 'First Card',
        list: 2,
      },
      {
        id: 4,
        label: 'Second Card',
        list: 2
      },
    ]
  },
];

const router = new Router([
  [ '/add', AddList ],
  [ '/', NewList, 'POST' ],
  [ 'cancel', NewList ]
]);

export default router.handle;
