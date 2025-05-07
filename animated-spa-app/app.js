import { Home } from './pages/home.js';
import { About } from './pages/about.js';
import { Services } from './pages/services.js';
import { Contact } from './pages/contact.js';
import { Dashboard } from './pages/dashboard.js';

const routes = {
  '/': Home,
  '/about': About,
  '/services': Services,
  '/contact': Contact,
  '/dashboard': Dashboard,
};

function router() {
  const path = location.hash.slice(1) || '/';
  const app = document.getElementById('app');
  const route = routes[path];
  app.innerHTML = route ? route() : '<h1>404 - Page not found</h1>';
}

window.addEventListener('hashchange', router);
window.addEventListener('load', router);
