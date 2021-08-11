class FavoriteRestoSearchPresenter {
   constructor({ favoriteRestos, view }) {
      this._view = view;
      this._listenToSearchRequestByUser();
      this._favoriteRestos = favoriteRestos;
   }

   _listenToSearchRequestByUser() {
      this._view.runWhenUserIsSearching((latestQuery) => {
         this._searchRestos(latestQuery);
      });
   }

   async_searchRestos(latestQuery) {
      this._latestQuery = latestQuery.trim();

      let foundRestos;
      if (this.latestQuery.length > 0) {
         foundRestos = await this._favoriteRestos.searchRestos(this.latestQuery);
      } else {
         foundRestos = await this._favoriteRestos.getAllRestos();
      }
      this._showFoundRestos(foundRestos);
   }

   _showFoundRestos(restos) {
      this._view.showFavoriteRestos(restos);
   }

   //    if (restos.length > 0) {
   //       html = restos.reduce(
   //          (carry, restoo) => carry.concat(`<li class="restoo"><span class="resto__title">${restoo.title || '-'}</span></li>`),
   //          '',
   //       );
   //    } else {
   //       html = '<div class="restos__not__found">Restaurant tidak ditemukan</div>';
   //    }

   //    document.querySelector('.restos').innerHTML = html;


   //    document.getElementById('restoo-search-container')
   //       .dispatchEvent(new Event('restos:searched:updated'));
   // }
   get latestQuery() {
      return this._latestQuery;
   }
}

export default FavoriteRestoSearchPresenter;