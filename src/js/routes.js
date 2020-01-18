import { renderBeersDOM } from "./beers.js";
import { renderBeerDetail } from "./beerDetail.js";
import { handleSearch } from "./navbar.js";
import { addQuoteListener, clearQuotes } from "./quotesForm.js";
import { renderFormComments } from "./ui.js";

page('/', () => {
    handleSearch('no-search', 'search');
    renderFormComments('show', 'hide');
    clearQuotes();
    renderBeersDOM();
});
page('/beerDetail/:id', ctx => {
    const { params: {id} } = ctx;
    handleSearch('search', 'no-search');
    renderBeerDetail(id);
    addQuoteListener(id);
    renderFormComments('hide', 'show');
});
page();