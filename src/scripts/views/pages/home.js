import RestoSource from '../../data/resto-source';
import { createRestaurantItemTemplate } from "../templates/template-creator";

const HomePage = {
  async render() {
    return `

    <div class="content">
      <div class="latest">
        <h1 class="latest__label">&#x2728; Daftar Restorant &#x2728;</h1>
      </div>
      <h2 class="content__heading">All Resto: (20)</h2>
      <div id="restos" class="restos">
 
      </div>
    </div>
   `;
  },

  async afterRender() {
    const restos = await RestoSource.homeResto();
    const restosContainer = document.querySelector('#restos');
    restos.forEach((restoo) => {
      restosContainer.innerHTML += createRestaurantItemTemplate(restoo);
    });
  },
};

export default HomePage;