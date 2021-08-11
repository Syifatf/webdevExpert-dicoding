
import FavoriteRestoSearchPresenter
   from '../src/scripts/views/pages/liked-restos/favorite-resto-search-presenter';
import FavoriteRestoIdb from '../src/scripts/data/favoriteResto-idb';
import FavoriteRestoSearchView
   from '../src/scripts/views/pages/liked-restos/favorite-resto-search-view';

describe('Searching restos', () => {
   let presenter;
   let favoriteRestos;
   let view;

   const searchRestos = (query) => {
      const queryElement = document.getElementById('query');
      queryElement.value = query;
      queryElement.dispatchEvent(new Event('change'));
   };

   const setRestoSearchContainer = () => {
      view = new FavoriteRestoSearchView();
      document.body.innerHTML = view.getTemplate();
   };

   const constructPresenter = () => {
      favoriteRestos = spyOnAllFunctions(FavoriteRestoIdb);
      presenter = new FavoriteRestoSearchPresenter({
         favoriteRestos,
         view,
      });
   };

   beforeEach(() => {
      setRestoSearchContainer();
      constructPresenter();
   });

   describe('When query is not empty', () => {
      it('should be able to capture the query typed by the user', () => {
         searchRestos('restaurant a');

         expect(presenter.latestQuery)
            .toEqual('restaurant a');
      });

      it('should ask the model to search for restos', () => {
         searchRestos('restaurant a');

         expect(favoriteRestos.searchRestos)
            .toHaveBeenCalledWith('restaurant a');
      });

      it('should show the found restos', () => {
         presenter._showFoundRestos([{ id: 1 }]);
         expect(document.querySelectorAll('.restoo-item').length)
            .toEqual(1);

         presenter._showFoundRestos([{
            id: 1,
            title: 'Satu',
         }, {
            id: 2,
            title: 'Dua',
         }]);
         expect(document.querySelectorAll('.restoo-item').length)
            .toEqual(2);
      });

      it('should show the title of the found restos', () => {
         presenter._showFoundRestos([{
            id: 1,
            title: 'Satu',
         }]);
         expect(document.querySelectorAll('.resto__title')
            .item(0).textContent)
            .toEqual('Satu');
      });

      it('should show - when the restoo returned does not contain a title', (done) => {
         document.getElementById('restos').addEventListener('restos:updated', () => {
            const restoTitles = document.querySelectorAll('.resto__title');
            expect(restoTitles.item(0).textContent).toEqual('-');

            done();
         });

         favoriteRestos.searchRestos.withArgs('restaurant a').and.returnValues([
            { id: 444 },
         ]);

         searchRestos('restaurant a');
      });
   });

   describe('When query is empty', () => {
      it('should capture the query as empty', () => {
         searchRestos(' ');
         expect(presenter.latestQuery.length)
            .toEqual(0);

         searchRestos('    ');
         expect(presenter.latestQuery.length)
            .toEqual(0);

         searchRestos('');
         expect(presenter.latestQuery.length)
            .toEqual(0);

         searchRestos('\t');
         expect(presenter.latestQuery.length)
            .toEqual(0);
      });

      it('should show all favorite restos', () => {
         searchRestos('    ');

         expect(favoriteRestos.getAllRestos)
            .toHaveBeenCalled();
      });
   });

   describe('When no favorite restos could be found', () => {
      it('should show the empty message', (done) => {
         document.getElementById('restos').addEventListener('restos:updated', () => {
            expect(document.querySelectorAll('.restoo-item__not__found').length).toEqual(1);

            done();
         });

         favoriteRestos.searchRestos.withArgs('restaurant a').and.returnValues([]);

         searchRestos('restaurant a');
      });

      it('should not show any restoo', (done) => {
         document.getElementById('restos').addEventListener('restos:updated', () => {
            expect(document.querySelectorAll('.restoo-item').length)
               .toEqual(0);
            done();
         });

         favoriteRestos.searchRestos.withArgs('restaurant a')
            .and
            .returnValues([]);

         searchRestos('restaurant a');
      });
   });
});
