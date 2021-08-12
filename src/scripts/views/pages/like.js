/* eslint-disable no-undef */
import FavoriteRestoIdb from '../../data/favoriteResto-idb';
import FavoriteRestoShowPresenter from './liked-restos/favorite-resto-show-presenter';

// const view = new FavoriteRestoSearchView();

const Like = {
  async render() {
    // eslint-disable-next-line no-undef
    return view.getTemplate();
  },

  async afterRender() {
    new FavoriteRestoShowPresenter({ view, favoriteRestos: FavoriteRestoIdb });
    console.log({ restos });
  },
};

export default Like;
