import { Router } from './router'
import { AddList } from './views/add_list';

const router = new Router();
router.register('/add', (params) => {
  return AddList;
});

export default router.routes;
