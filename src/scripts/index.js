import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import '../scripts/views/pages/home';
// import './dataJs.js';

import App from './views/app';

const app = new App ({
    button: document.querySelector('#menu'),
    drawer: document.querySelector('#drawer'),
    mainContent: document.querySelector('#mainContent')
});
 
window.addEventListener('hashchange', () => {
    app.renderPage();
  });
   
  window.addEventListener('load', () => {
    app.renderPage();
  });