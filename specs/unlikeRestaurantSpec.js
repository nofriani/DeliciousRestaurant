/* eslint-disable no-undef */
import FavoriteResto from '../src/scripts/data/favorite-resto';
import * as TestFactories from './helpers/testFactories';

const addLikeButtonContainer = () => {
  document.body.innerHTML = '<div id="likeButtonContainer"></div>';
};

describe('Unliking A Resto', () => {
  beforeEach(async () => {
    addLikeButtonContainer();
    await FavoriteResto.putResto({ id: 1 });
  });

  afterEach(async () => {
    await FavoriteResto.deleteResto(1);
  });

  it('should display unlike widget when the Resto has been liked', async () => {
    await TestFactories.createLikeButtonInitiatorWithResto({ id: 1 });

    expect(document.querySelector('[aria-label="unlike this movie"]')).toBeTruthy();
  });

  it('should not display like widget when the Resto has been liked', async () => {
    await TestFactories.createLikeButtonInitiatorWithResto({ id: 1 });

    expect(document.querySelector('[aria-label="like this movie"]')).toBeFalsy();
  });

  it('should be able to remove liked Resto from the list', async () => {
    await TestFactories.createLikeButtonInitiatorWithResto({ id: 1 });

    document.querySelector('[aria-label="unlike this movie"]').dispatchEvent(new Event('click'));

    expect(await FavoriteResto.getAllResto()).toEqual([]);
  });

  it('should not throw error if the unliked Resto is not in the list', async () => {
    await TestFactories.createLikeButtonInitiatorWithResto({ id: 1 });

    await FavoriteResto.deleteResto(1);

    document.querySelector('[aria-label="unlike this movie"]').dispatchEvent(new Event('click'));

    expect(await FavoriteResto.getAllResto()).toEqual([]);
  });
});
