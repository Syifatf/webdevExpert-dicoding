import { openDB } from 'idb';
import CONFIG from '../globals/config';

const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } = CONFIG;

const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' });
  },
});

const FavoriteRestoIdb = {
  async getRestoo(id) {
    if (!id) {
      return;
    }
    return (await dbPromise).get(OBJECT_STORE_NAME, id);
  },
  async getAllRestos() {
    return (await dbPromise).getAll(OBJECT_STORE_NAME);
  },
  async putRestoo(restaurant) {
    if (!restaurant.hasOwnProperty('id')) {
      return;
    }
    return (await dbPromise).put(OBJECT_STORE_NAME, restaurant);
  },
  async deleteRestoo(id) {
    return (await dbPromise).delete(OBJECT_STORE_NAME, id);
  },
  // async searchRestos(query) {
  //   return (await this.getAllRestos()).filter((restoo) => {
  //     const loweredCaseRestoTitle = (restoo.title || '-').toLowerCase();
  //     const jammedRestoTitle = loweredCaseRestoTitle.replace(/\s/g, '');

  //     const loweredCaseQuery = query.toLowerCase();
  //     const jammedQuery = loweredCaseQuery.replace(/\s/g, '');

  //     return jammedRestoTitle.indexOf(jammedQuery) !== -1;
  //   });
  // },
};

export default FavoriteRestoIdb;
