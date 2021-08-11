import LikeButtonPresenter from '../../src/scripts/utils/like-button-presenter';
import FavoriteRestoIdb from '../../src/scripts/data/favoriteResto-idb';

const createLikeButtonPresenterWithResto = async (restoo) => {
  await LikeButtonPresenter.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteRestos: FavoriteRestoIdb,
    restoo,
  });
};

export { createLikeButtonPresenterWithResto };