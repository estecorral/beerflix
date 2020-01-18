import api from './api.js';

const { newQuote, getBeerDetail }  = api();

export const quoteTemplate = (quote) => {
    return`
        <div class="cardDetail">
          <div class="card-body">
            ${quote.comment}
            <p><small>${quote.dateComment}</small></p>
            <hr/>
          </div>
        </div>
    `;
};

const quoteClear = () => {
    return`
    <div id="quotes-list">

            </div>
    `
};

const quotesList = document.querySelector('#quotes-list');

export const addQuoteListener = id => {
    const quotesForm = document.querySelector('#quote-form');
    const quotesInput = document.querySelector('#quote');

    quotesForm.addEventListener('submit', async event => {
        event.preventDefault();
        try {
            if(quotesInput.validity.valid) {
                await newQuote(id, quotesInput.value);
                const beer = await getBeerDetail(id);
                const lastComment = beer.beer.comment[beer.beer.comment.length - 1];
                quotesList.innerHTML += quoteTemplate(lastComment);
            }
        } catch (e) {
            console.error(e);
        }
    });
};

export const renderQuotes = quotes => {
    quotes.map(comment => {
        quotesList.innerHTML += quoteTemplate(comment);
    });
};

export const clearQuotes = () => {
    quotesList.innerHTML = quoteClear();
};