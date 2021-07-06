import HomePage from '../views/pages/home';
import AboutUs from '../views/pages/about';
import Detail from '../views/pages/detail';
 
const routes = {
  '/': HomePage, // default page
  '/home': HomePage,
  '/about': AboutUs,
  '/detail/:id': Detail,
};

export default routes;