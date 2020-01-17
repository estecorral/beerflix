import  { renderBeersDOM } from './beers.js';
import { toggle } from "./ui.js";
//const {setItem, getItem} = storage('cookieStorage');

const searchForm = document.querySelector('#search-form');
const searchInput = document.querySelector('#inputSearch');
const searchDate = document.querySelector('#searchDate');

const handleSearch = toggle(searchForm);

searchForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    if(searchInput.validity.valid && searchDate.validity.valid) {
        // setItem('search', searchInput.value);
        renderBeersDOM(searchInput.value, searchDate.value.substring(0,4));
    }
});

searchForm.addEventListener('click', () => (
   handleSearch('no-search', 'search')
));

export { handleSearch };