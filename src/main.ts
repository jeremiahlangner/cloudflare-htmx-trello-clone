import { Router } from "./router/router";
import { AddList } from './views/add_list';

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

function main(request: Request): void {
  const router = new Router();
  return router.handle(request);
}

export default main;
