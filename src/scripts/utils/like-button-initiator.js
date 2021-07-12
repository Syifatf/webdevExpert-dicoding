import FavoriteRestoIdb from '../data/favoriteResto-idb';
import { createLikeButtonTemplate, createLikedButtonTemplate } from '../views/templates/template-creator';
 
const LikeButtonInitiator = {
  async init({ likeButtonContainer, restoo }) {
    this._likeButtonContainer = likeButtonContainer;
    this._restoo = restoo;
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
    const restoo = await FavoriteRestoIdb.getRestoo(id);
    return !!restoo;
  },
 
  _renderLike() {
   this._likeButtonContainer.innerHTML = createLikeButtonTemplate();
  
   const likeButton = document.querySelector('#likeButton');
   likeButton.addEventListener('click', async () => {
     await FavoriteRestoIdb.putRestoo(this._restoo);
     this._renderButton();
   });
 },
 
 _renderLiked() {
   this._likeButtonContainer.innerHTML = createLikedButtonTemplate();
    
   const likeButton = document.querySelector('#likeButton');
   likeButton.addEventListener('click', async () => {
     await FavoriteRestoIdb.deleteRestoo(this._restoo.id);
     this._renderButton();
   });
 },
};
 
export default LikeButtonInitiator;