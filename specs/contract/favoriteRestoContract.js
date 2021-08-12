const itActsAsFavoriteRestoModel = (favoriteResto) => {
  it('should return the resto that has been added', async () => {
    favoriteResto.putRestoo({ id: 1 });
    favoriteResto.putRestoo({ id: 2 });

    expect(await favoriteResto.getRestoo(1))
      .toEqual({ id: 1 });
    expect(await favoriteResto.getRestoo(2))
      .toEqual({ id: 2 });
    expect(await favoriteResto.getRestoo(3))
      .toEqual(undefined);
  });

  it('should refuse a resto from being added if it does not have the correct property', async () => {
    favoriteResto.putRestoo({ aProperty: 'property' });

    expect(await favoriteResto.getAllRestos())
      .toEqual([]);
  });

  it('can return all of the restos that have been added', async () => {
    favoriteResto.putRestoo({ id: 1 });
    favoriteResto.putRestoo({ id: 2 });

    expect(await favoriteResto.getAllRestos())
      .toEqual([
        { id: 1 },
        { id: 2 },
      ]);
  });

  it('should remove favorite resto', async () => {
    favoriteResto.putRestoo({ id: 1 });
    favoriteResto.putRestoo({ id: 2 });
    favoriteResto.putRestoo({ id: 3 });

    await favoriteResto.deleteRestoo(1);

    expect(await favoriteResto.getAllRestos())
      .toEqual([
        { id: 2 },
        { id: 3 },
      ]);
  });

  it('should handle request to remove a resto even though the resto has not been added', async () => {
    favoriteResto.putRestoo({ id: 1 });
    favoriteResto.putRestoo({ id: 2 });
    favoriteResto.putRestoo({ id: 3 });

    await favoriteResto.deleteRestoo(4);

    expect(await favoriteResto.getAllRestos())
      .toEqual([
        { id: 1 },
        { id: 2 },
        { id: 3 },
      ]);
  });

  // it('should be able to search for restos', async () => {
  //   favoriteResto.putRestoo({ id: 1, title: 'restaurant a' });
  //   favoriteResto.putRestoo({ id: 2, title: 'restaurant b' });
  //   favoriteResto.putRestoo({ id: 3, title: 'restaurant abc' });
  //   favoriteResto.putRestoo({ id: 4, title: 'ini mah restaurant abcd' });

  //   expect(await favoriteResto.searchRestos('restaurant a')).toEqual([
  //     { id: 1, title: 'restaurant a' },
  //     { id: 3, title: 'restaurant abc' },
  //     { id: 4, title: 'ini mah restaurant abcd' },
  //   ]);
  // });
};

export { itActsAsFavoriteRestoModel };
