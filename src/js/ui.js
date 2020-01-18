export const toggle = elemento => (removeClass, addClass) => {
        elemento.classList.remove(removeClass);
        elemento.classList.add(addClass);
};

export const toggleClass = (elemento, toggleClass) => {
        elemento.classList.toggle(toggleClass);
};
const loader = document.querySelector('#loader');
export const renderLoader = toggle(loader);

const formQuote = document.querySelector('#quote-form');
export const renderFormComments = toggle(formQuote);