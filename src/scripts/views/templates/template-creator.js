import CONFIG from '../../globals/config';
 
const createRestaurantDetailTemplate = (restaurant) => `
  <h2 class="movie__title">${restaurant.title}</h2>
  <img class="movie__poster" src="${CONFIG.BASE_IMAGE_URL + restaurant.poster_path}" alt="${restaurant.title}" />
  <div class="movie__info">
  <h3>Information</h3>
    <h4>Tagline</h4>
    <p>${restaurant.tagline}</p>
    <h4>Release Date</h4>
    <p>${restaurant.release_date}</p>
    <h4>Duration</h4>
    <p>${restaurant.runtime} minutes</p>
    <h4>Rating</h4>
    <p>${restaurant.vote_average}</p>
  </div>
  <div class="movie__overview">
    <h3>Overview</h3>
    <p>${restaurant.overview}</p>
  </div>
`;
 
const createRestaurantItemTemplate = (restaurant) => `
<article class="post-item">
<img class="post-item__thumbnail" src="${restaurant.pictureId}" alt=" ">

<div class="post-item__content">
<div class="rating">
    <input type="radio" name="star" id="star1"><label for="star1"></label>
    <input type="radio" name="star" id="star2"><label for="star2"></label>
    <input type="radio" name="star" id="star3"><label for="star3"></label>
    <input type="radio" name="star" id="star4"><label for="star4"></label>
    <input type="radio" name="star" id="star5"><label for="star5"></label>
</div>        

<span class="number-rating">${restaurant.rating}</span>

    <h1 class="post-item__title"><a id="ha" href="#">&#128609; ${restaurant.name} &#128611;</a></h1>
    <p class="post-item__date">
      <a href="#" class="post-item__date__author">${restaurant.city}</a>
    </p>
    <p class="post-item__description">${restaurant.description}</p>
</div>
</article>
  `;
 
export { createRestaurantItemTemplate, createRestaurantDetailTemplate };