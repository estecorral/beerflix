import api from './api.js'
import { renderLoader } from "./ui.js";

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
                <p class="card-text"><small class="text-muted">${beer.firstBrewed}</small></p>
                <a href="/beerDetail/${beer.beerId}" class="btn btn-secondary">Más info</a>
              </div>
            </div>
          </div>
        </div>
    `;
};

const renderBeers = (element, beers) => {
    const htmlBeers = beers.map(beer => templateBeer(beer)).join('');
    element.innerHTML = htmlBeers;
};

const renderBeersDOM = async (text, year) => {
    try {
        renderLoader('hide', 'show');
        const mainSection = document.querySelector('main');
        const items = await getBeers(text);
        if(!year) {
            renderBeers(mainSection, items.beers);
        } else {
            const yearItems = items.beers.filter(beer => {
                if (beer.firstBrewed.substring(3,7) === year) {
                    return beer;
                }
            });
            renderBeers(mainSection, yearItems);
        }
    }catch (e) {
        console.error(e);
    } finally {
       renderLoader('show', 'hide');
    }
};

export { renderBeersDOM };