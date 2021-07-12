import UrlParser from '../../routes/url-parser';
import RestoSource from '../../data/resto-source';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';


const Detail = {
  async render() {
    return `
    <div id="restoo" class="restoo"></div> 
    <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restoo = await RestoSource.detailResto(url.id);
    const restooContainer = document.querySelector('#restoo');
    restooContainer.innerHTML = createRestaurantDetailTemplate(restoo.restaurant);
    console.log({ restoo });

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restoo: {
        id: restoo.restaurant.id,
        name: restoo.restaurant.name,
        city: restoo.restaurant.city,
        pictureId: restoo.restaurant.pictureId,
        description: restoo.restaurant.description,
        rating: restoo.restaurant.rating,
      },
    });
  },
};

export default Detail;