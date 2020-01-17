import { renderBeersDOM } from "./beers.js";
import renderBeerDetail from "./beerDetail.js";
import { handleSearch } from "./navbar.js";

page('/', () => {
    handleSearch('no-search', 'search');
   renderBeersDOM();
});
page('/beerDetail/:id', ctx => {
    const { params: {id} } = ctx;
    console.log(id);
    handleSearch('search', 'no-search');
    renderBeerDetail(id);
});
page();