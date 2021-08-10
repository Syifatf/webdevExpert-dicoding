/* eslint-disable max-len */
import CONFIG from '../../globals/config';

const createFDrinkList = (fdrink) => `${fdrink.name}, `;
const createRestaurantDetailTemplate = (restaurant) => `
<div class="detail-a">
  <h4 class="resto__title" href="#" >&#128609; ${restaurant.name} &#128609;</h4> <br/>

  <img class="resto__poster" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
  <div class="resto__info">
  <h3>Information Resto</h3> 
  <h4>Rating: ⭐️⭐️⭐️⭐️⭐️ ${restaurant.rating}</h4>
    <h4>City:  ${restaurant.city} </h4> 
    <h4>Address: </h4>
    <p>${restaurant.address}</p> <br>
    <hr size="5px" width="70%">
    <h4>Categories</h4>
    <p>${restaurant.categories.map((fdrink) => fdrink.name)}</p>
    <h4>Menus</h4> <br>
    <p> <b>1. Foods:</b> ${restaurant.menus.foods.map((fdrink) => fdrink.name)}</p><br>
    <p> <b>2. Drinks:</b> ${restaurant.menus.drinks.map((fdrink) => fdrink.name)}</p>
  </div>
  <div class="resto__overview">
    <h3>Description</h3>
    <p>${restaurant.description}</p>
  </div>

  <div class="cards">
  <hr size="2px" width="40%">
  <h4 class="rev">Customer Reviews</h4>

  <div class="card">
  <div class="container rght">
  <p>${restaurant.customerReviews.map((fdrink) => `
    <b>name: </b> ${fdrink.name}
    <ul>
      <li style="list-style-image: url(https://assets.ubuntu.com/sites/ubuntu/latest/u/img/favicon.ico)">> <b>review: </b> ${fdrink.review}</li><hr>
    </ul>
  `)}
  </></p> 
  </div>
</div>

  </div>
  </div>
</div>
`;

const createRestaurantItemTemplate = (restaurant) => `
<article class="post-item">
  <img class="post-item__thumbnail" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}">
  
  <div class="post-item__content">
  <div class="resto-item__header__rating">
  <p>⭐️⭐️⭐️⭐️⭐️  <span class="restaurant-item__header__rating__score">${restaurant.rating}</span></p>
</div>       
      <h1 class="post-item__title"><a href="${`/#/detail/${restaurant.id}`}">&#128609; ${restaurant.name} &#128611;</a></h1>
      <p class="post-item__date">
        <a href="#" class="post-item__city__author">${restaurant.city}</a> 
      </p>
      <p>${restaurant.description}</p>            
    </div>
  </article>
</div>
  `;

const createLikeRestoButtonTemplate = () => `
  <button aria-label="like this restoo" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestoButtonTemplate = () => `
  <button aria-label="unlike this restoo" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeRestoButtonTemplate,
  createUnlikeRestoButtonTemplate,
  createFDrinkList,
};
