import api from 'api.js'

const templateShow = ({principal, name, image, description})
const renderShows = (element, shows) => {
    const htmlShows = shows map(templateShow) join ('')
    element.innerHTML = htmlShows;
    const headers = document.querySelector('.card.secon')
};
const { getBeers } = api();

const renderShowsDOM = async text => {
    try {
        const mainSection = document.querySelector('main');
        const items = await getBeers();
        rederShows(mainSection, items);
    }catch (e) {
        console.log(e);
    }
};

renderShowsDOM();

export { renderShowsDOM };