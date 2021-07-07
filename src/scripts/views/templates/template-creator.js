import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
<h2 class="resto__title">${restaurant.name}</h2>
<img class="resto__poster" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
<div class="resto__info">
<h3>Information</h3>
  <h4>City</h4>
  <p>${restaurant.city} minutes</p>
  <h4>Rating</h4>
  <p>${restaurant.rating}</p>
  <h4>Address</h4>
  <p>${restaurant.address}</p>
  <h4>Categories</h4>
  <p>${restaurant.categories}</p>
  <h4>Menus</h4>
  <p>${restaurant.menus}</p>
</div>
<div class="resto__overview">
  <h3>Description</h3>
  <p>${restaurant.description}</p>
</div>

<div class="card">
<h4>customer Reviews</h4>
<p>${restaurant.customerReviews}</p>

</div>
`;

const createRestaurantItemTemplate = (restaurant) => `
<article class="post-item">
  <img class="post-item__thumbnail" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}">
  
  <div class="post-item__content">
  <div class="resto-item__header__rating">
  <p>⭐️<span class="restaurant-item__header__rating__score">${restaurant.rating}</span></p>
</div>       

      <h1 class="post-item__title"><a href="${`/#/detail/${restaurant.id}`}">&#128609; ${restaurant.name} &#128611;</a></h1>
      <p class="post-item__date">
        <a href="#" class="post-item__date__author">${restaurant.city}</a>
      </p>
      <p>${restaurant.description}</p>            
    </div>
  </article>
</div>

  `;

export { createRestaurantItemTemplate, createRestaurantDetailTemplate };