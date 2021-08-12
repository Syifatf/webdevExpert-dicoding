import FavoriteRestoIdb from '../../data/favoriteResto-idb';
import FavoriteRestoShowPresenter from './liked-restos/favorite-resto-show-presenter';

// const view = new FavoriteRestoSearchView();

const Like = {
  async render() {
    // eslint-disable-next-line no-undef
    return view.getTemplate();
  },

  async afterRender() {
    // eslint-disable-next-line no-undef
    new FavoriteRestoShowPresenter({ view, favoriteRestos: FavoriteRestoIdb });
    // eslint-disable-next-line no-undef
    console.log({ restos });
  },
};

export default Like;
