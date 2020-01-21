import  { renderBeersDOM } from './beers.js';
import { toggle } from "./ui.js";
import storage from "./storage.js";
const {setItem, getItem} = storage('lStorage');

const searchForm = document.querySelector('#search-form');
const searchInput = document.querySelector('#inputSearch');
const searchDate = document.querySelector('#searchDate');

searchInput.value = getItem('search');

const handleSearch = toggle(searchForm);

searchForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    if(searchInput.validity.valid && searchDate.validity.valid) {
        setItem('search', searchInput.value);
        renderBeersDOM(searchInput.value, searchDate.value.substring(0,4));
    }
});

searchForm.addEventListener('click', () => (
   handleSearch('no-search', 'search')
));

export { handleSearch };