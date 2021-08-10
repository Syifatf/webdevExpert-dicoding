import {
  createLikeRestoButtonTemplate,
  createUnlikeRestoButtonTemplate,
} from '../views/templates/template-creator';

const LikeButtonPresenter = {
  async init({ likeButtonContainer, favoriteRestos, restoo }) {
    this._likeButtonContainer = likeButtonContainer;
    this._restoo = restoo;
    this._favoriteRestos = favoriteRestos;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restoo;

    if (await this._isRestooExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isRestooExist(id) {
    const restoo = await this._favoriteRestos.getRestoo(id);
    return !!restoo;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeRestoButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await this._favoriteRestos.putRestoo(this._restoo);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createUnlikeRestoButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await this._favoriteRestos.deleteRestoo(this._restoo.id);
      this._renderButton();
    });
  },
};

export default LikeButtonPresenter;