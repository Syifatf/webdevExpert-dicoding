import HomePage from '../views/pages/home';
import Detail from '../views/pages/detail';
import Like from '../views/pages/like';

const routes = {
  '/': HomePage, // default page
  '/home': HomePage,
  '/like': Like,
  '/detail/:id': Detail,
};

export default routes;
