import HomePage from '../views/pages/home';
import AboutUs from '../views/pages/about';
import Detail from '../views/pages/detail';
import Like from '../views/pages/like';
 
const routes = {
  '/': HomePage, // default page
  '/home': HomePage,
  '/like': Like,
  '/about': AboutUs,
  '/detail/:id': Detail,
};

export default routes;