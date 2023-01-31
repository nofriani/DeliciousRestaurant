/* eslint-disable no-undef */
Feature('Liking Restaurant');

Scenario('Menyukai salah satu restaurant dan membatalkannya', async ({ I }) => {
  I.amOnPage('/');
  I.wait(2);
  I.seeElement('.link-button');
  await I.grabTextFrom(locate('.link-button').first());
  I.click(locate('.link-button').first());
  I.wait(2);
  I.click('#likeButton');
  I.amOnPage('/#/fav');
  I.click(locate('.link-button').first());
  I.wait(2);
  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('/#/fav');
  I.dontSeeElement('.link-button');
});
