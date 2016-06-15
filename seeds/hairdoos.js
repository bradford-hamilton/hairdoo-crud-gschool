
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('hairdoos').del(),
    // Inserts seed entries
    knex('hairdoos').insert({name: 'The Meth Dealer', description: 'Shave entire body. Two grams of meth. Bingo.', image: 'http://bloximages.newyork1.vip.townnews.com/gillettenewsrecord.com/content/tncms/assets/v3/editorial/4/31/4317ce73-a34c-566e-a3ca-778fc77c774a/5419b4bc454b1.image.jpg', rating: '10'}),
    knex('hairdoos').insert({name: 'The High and Weezy', description: 'High and tight. Shawty wanna thug, bottles in the club.', image: 'http://www.menshairstylestoday.com/wp-content/uploads/2016/03/High-Top-Fade.jpg', rating: '6'}),
    knex('hairdoos').insert({name: 'The Professor Pawel', description: 'Beautifully groomed. Professional. Sex.', image: 'http://static.parade.com/wp-content/uploads/2016/01/LeoD.Cover-FTR.jpg', rating: '10'})
  );
};
