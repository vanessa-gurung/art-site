exports.up = function(knex) {
  return knex.schema.createTable('diary_comics', (table) => {
    table.increments('id')
    table.date('date')
    table.string('diary_comic')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('diary_comics')
};
