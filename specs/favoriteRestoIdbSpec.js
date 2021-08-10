import { itActsAsFavoriteRestoModel } from './contract/favoriteRestoContract';
import FavoriteRestoIdb from '../src/scripts/data/favoriteResto-idb';

describe('Favorite Resto Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavoriteRestoIdb.getAllRestos()).forEach(async (restoo) => {
      await FavoriteRestoIdb.deleteRestoo(restoo.id);
    });
  });

  itActsAsFavoriteRestoModel(FavoriteRestoIdb);
});
