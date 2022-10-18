exports.up = function (knex) {
  return knex.schema.createTable('diaryComics', (table) => {
    table.increments('id')
    table.string('diary_comic')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('diaryComics')
}
