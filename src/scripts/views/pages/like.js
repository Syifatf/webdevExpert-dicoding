import FavoriteRestoIdb from '../../data/favoriteResto-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Like = {
  async render() {
    return `
      <div class="content">
        <h1 class="content__heading">&#128609; Your Liked Restaurant &#128611;</h1>
        <hr heigth="5px" width="100%" text-align="center">
        <div id="restos" class="restos">

        </div>

        <div class="container" id="empty-favorite-restaurant">
          <h1>you have'n added a favorite restaurant yet</h1>
        </div>
      </div>
    `;
  },

  async afterRender() {
    const restos = await FavoriteRestoIdb.getAllRestos();
    const restosContainer = document.querySelector('#restos');
    const restosEmptyContainer = document.querySelector(
      '#empty-favorite-restaurant',
    );
    if (restos.length > 0) {
      restosEmptyContainer.style.display = 'none';

      restos.forEach((restoo) => {
        restosContainer.innerHTML += createRestaurantItemTemplate(restoo);
        console.log({ restos });
      });
    } else {
      restosEmptyContainer.style.display = 'block';
    }
  },
};

export default Like;
