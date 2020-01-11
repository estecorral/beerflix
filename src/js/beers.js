import api from './api.js'

const {getBeers} = api();

const templateBeer = beer => {
    return `
        <div class="card" style="max-width: 540px;">
          <div class="row no-gutters">
            <div class="col-md-4">
              <img src="${beer.image}" class="card-img">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">${beer.name}</h5>
                <p class="card-text">${beer.description.substring(0,40)}...</p>
                <a href="#" class="btn btn-secondary">Más info</a>
              </div>
            </div>
          </div>
        </div>
    `;
};

const items = [
    {
        name: 'lala',
        image: '../../img/beer2_hight.png',
        description: 'lalallalaljkejkajdkasncudhaoajads',
    },
    {
        name: 'lala22222',
        image: '../../img/beer2_hight.png',
        description: 'lalallalaljkejkajdkasncudhaoajads',
    },
];

const renderBeers = (element, beers) => {
    const htmlBeers = beers.map(beer => templateBeer(beer)).join('');
    element.innerHTML = htmlBeers;
};

const renderBeersDOM = async (text) => {
    try {
        const mainSection = document.querySelector('main');
        const items = await getBeers();
        console.log(items.beers);
        renderBeers(mainSection, items.beers);
    }catch (e) {
        console.error(e);
    }
};

renderBeersDOM();

export { renderBeersDOM };