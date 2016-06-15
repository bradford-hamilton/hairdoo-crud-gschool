
exports.up = function(knex, Promise) {
  return knex.schema.createTable('hairdoos', function(table){
    table.increments();
    table.string('name');
    table.text('description');
    table.string('image');
    table.integer('rating');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('hairdoos');

};
