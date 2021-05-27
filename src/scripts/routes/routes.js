/* eslint-disable linebreak-style */
import Recommend from '../views/pages/recommend';
import Detail from '../views/pages/detail';
import Favorite from '../views/pages/favorite';

const routes = {
  '/': Recommend, // default page
  '/recommend': Recommend,
  '/detail/:id': Detail,
  '/favorite': Favorite,
};

export default routes;
