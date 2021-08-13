Feature('Unliking Rests');

Before(({ I }) => {
  I.amOnPage('/#/like');
});

Scenario('showing empty liked rests', ({ I }) => {
  I.seeElement('#empty-favorite-restaurant');
});

Scenario('liking one resto', ({ I }) => {
  I.seeElement('#empty-favorite-restaurant');

  I.amOnPage('/');

  I.seeElement('.post-item a');
  I.click(locate('.post-item a').first());

  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('/#/like');
  I.seeElement('.post-item');
  I.click('.post-item a');
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('#empty-favorite-restaurant');
});
