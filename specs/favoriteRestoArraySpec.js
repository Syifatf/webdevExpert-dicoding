import { itActsAsFavoriteRestoModel } from './contract/favoriteRestoContract';

let favoriteRestos = [];

const FavoriteRestoArray = {

  getRestoo(id) {
    if (!id) {
      return;
    }

    return favoriteRestos.find((restoo) => restoo.id === id);
  },

  getAllRestos() {
    return favoriteRestos;
  },

  putRestoo(restoo) {
    if (!restoo.hasOwnProperty('id')) {
      return;
    }

    // pastikan id ini belum ada dalam daftar favoriteRestos
    if (this.getRestoo(restoo.id)) {
      return;
    }

    favoriteRestos.push(restoo);
  },

  deleteRestoo(id) {
    // cara boros menghapus film dengan meng-copy film yang ada
    // kecuali film dengan id == id
    favoriteRestos = favoriteRestos.filter((restoo) => restoo.id !== id);
  },
};

describe('Favorite Resto Array Contract Test Implementation', () => {
  afterEach(() => favoriteRestos = []);

  itActsAsFavoriteRestoModel(FavoriteRestoArray);
});
