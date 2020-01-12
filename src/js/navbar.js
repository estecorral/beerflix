import  { renderBeersDOM } from './beers.js';

//const {setItem, getItem} = storage('cookieStorage');

const searchForm = document.querySelector('#search-form');
const searchInput = document.querySelector('#inputSearch');
const searchDate = document.querySelector('#searchDate');

searchForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    if(searchInput.validity.valid && searchDate.validity.valid) {
        // setItem('search', searchInput.value);
        renderBeersDOM(searchInput.value, searchDate.value.substring(0,4));
    }
});