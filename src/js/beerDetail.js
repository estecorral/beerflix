import api from './api.js';
import { renderLoader } from "./ui.js";
import { renderQuotes } from "./quotesForm.js";

const { getBeerDetail, addLike } = api();

const buttonLikes = (likes) => {
    return `
    <button type="button" class="btn btn-success" id="buttonLike">
                    Like <span class="badge badge-light" id="likesCouter">${likes}</span>
    <span class="sr-only">likes</span>
    `
};

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
                <p class="card-text">${beer.brewersTips}</p>
                <p class="card-text"><small class="text-muted">${beer.firstBrewed}</small></p>
                <p class="card-text"><small class="text-muted">${beer.contributedBy}</small></p>
                ${buttonLikes(beer.likes)}
            </button>
              </div>
            </div>
          </div>
        </div>
    `;
};

const beerMalts = (malt) => {
    return`
        <div class="cardDetail bg-light mb-3" id="ingredientsCard">
          <div class="card-header">${malt.name}</div>
          <div class="card-body">
            <p class="card-text">${malt.amount.value} ${malt.amount.unit}</p>
          </div>
        </div>
    `
};

const beerHops = (hop) => {
    return`
        <div class="cardDetail text-white bg-secondary mb-3" id="ingredientsCard">
          <div class="card-header">${hop.name}</div>
          <div class="card-body">
            <p class="card-text"> Cantidad: ${hop.amount.value} ${hop.amount.unit}</p>
            <p class="card-text">${hop.add}</p>
            <p class="card-text">${hop.attribute}</p>
          </div>
        </div>
    `
};
const selector = document.querySelector('main');
export const renderBeerDetail = async (id) => {
    try {
        renderLoader('hide', 'show');
        const beer = await getBeerDetail(id);
        selector.innerHTML = beerDetailTemplate(beer.beer);
        renderIngredients(beer.beer.ingredients);
        if (beer.beer.comment.length > 0){
            renderQuotes(beer.beer.comment);
        }
        refreshLikes(id);
    }catch (e) {
        console.log(e);
    } finally {
        renderLoader('show', 'hide');
    }
};

const renderIngredients = ingredients => {
    ingredients.malt.map(malt => {
        selector.innerHTML += beerMalts(malt);
    });
    ingredients.hops.map(hop => {
        selector.innerHTML += beerHops(hop);
    })
};

const refreshLikes = (id) => {
    const buttonLike = document.querySelector('#buttonLike');
    const likesCouter = document.querySelector('#likesCouter');
    buttonLike.addEventListener('click', async event => {
        try {
            event.preventDefault();
            const response = await addLike(id);
            console.log(response);
            likesCouter.innerText++;
        }catch (e) {
            console.error(e);
        }
    });
};
