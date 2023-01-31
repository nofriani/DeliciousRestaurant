/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
import LikeButtonInitiator from '../../src/scripts/utils/like-button-initiator.js';
import FavoriteResto from '../../src/scripts/data/favorite-resto.js';

const createLikeButtonInitiatorWithResto = async (restaurant) => {
  await LikeButtonInitiator.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteResto: FavoriteResto,
    restaurant,
  });
};

export { createLikeButtonInitiatorWithResto };
