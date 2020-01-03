import toggle from './ui.js';
import  { renderShowsDOM } from './shows.js';

const navbar = document.querySelector('#app-navbar');
const searchIcon = document.querySelector('#navbar-search');

const handleNavBar = toggle(navbar);

searchIcon.addEventListener('click', () => (
   handleNavBar('no-search', 'search')
));