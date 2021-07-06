import UrlParser from '../../routes/url-parser';
import RestoSource from '../../data/resto-source';

const Detail = {
  async render() {
    return `
      <div id="movie" class="movie"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestoSource.detailResto(url.id);
    console.log(restaurant);

    // TODO: tampilkan movie di dalam DOM
  },
};

export default Detail;