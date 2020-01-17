import api from './api.js';
import { renderLoader } from "./ui.js";

const { getBeerDetail } = api();

const beerDetailTemplate = (beer) => {
    return`
    <div class="cardDetail mb-3">
      <div class="row no-gutters">
        <div class="col-md-4">
          <img src="${beer.image}" class="card-img-detail">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">${beer.name}</h5>
            <p class="card-text">${beer.description}</p>
            <p class="card-text"><small class="text-muted">${beer.firstBrewed}</small></p>
          </div>
        </div>
      </div>
    </div>
    <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
      <div class="card-header">Ingredientes</div>
      <div class="card-body">
        <h5 class="card-title">Primary card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>
    <div class="card text-white bg-secondary mb-3" style="max-width: 18rem;">
      <div class="card-header">Header</div>
      <div class="card-body">
        <p class="card-text">Maltas: ${beer.ingredients.malt}</p>
        <p class="card-text">${beer.ingredients.hops}</p>
        <p class="card-text"><small class="text-muted">${beer.ingredients.yeast}</small></p>
      </div>
    </div>
    </div>
    `;
};


const renderBeerDetail = async (id) => {
    try {
        renderLoader('hide', 'show');
        const selector = document.querySelector('main');
        const beer = await getBeerDetail(id);
        console.log(beer);
        selector.innerHTML = beerDetailTemplate(beer.beer);
    }catch (e) {
        console.log(e);
    } finally {
        renderLoader('show', 'hide');
    }

};

export default renderBeerDetail;