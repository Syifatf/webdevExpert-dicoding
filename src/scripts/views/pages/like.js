import FavoriteRestoIdb from '../../data/favoriteResto-idb';
import FavoriteRestoSearchView from './liked-restos/favorite-resto-search-view';
import FavoriteRestoShowPresenter from './liked-restos/favorite-resto-show-presenter';
import FavoriteRestoSearchPresenter from './liked-restos/favorite-resto-search-presenter';

const view = new FavoriteRestoSearchView();

const Like = {
  async render() {
    return view.getTemplate();
  },

  async afterRender() {
    new FavoriteRestoShowPresenter({ view, favoriteRestos: FavoriteRestoIdb });
    new FavoriteRestoSearchPresenter({ view, favoriteRestos: FavoriteRestoIdb });
    console.log({ restos });
  },
};

export default Like;
