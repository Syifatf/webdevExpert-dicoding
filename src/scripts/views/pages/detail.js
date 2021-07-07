import UrlParser from '../../routes/url-parser';
import RestoSource from '../../data/resto-source';
import { createRestaurantDetailTemplate } from '../templates/template-creator';


const Detail = {
  async render() {
    return `
    <div id="restoo" class="restoo"></div>    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restoo = await RestoSource.detailResto(url.id);
    const restooContainer = document.querySelector('#restoo');
    restooContainer.innerHTML = createRestaurantDetailTemplate(restoo);

    // TODO: tampilkan movie di dalam DOM
  },
};

export default Detail;