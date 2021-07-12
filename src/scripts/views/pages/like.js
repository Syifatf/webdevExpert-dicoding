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
      </div>
    `;
  },

  async afterRender() {
    const restos = await FavoriteRestoIdb.getAllRestos();
    const restosContainer = document.querySelector('#restos');
    restos.forEach((restoo) => {
      restosContainer.innerHTML += createRestaurantItemTemplate(restoo);
      console.log({restos})
    });
  },
};

export default Like;
