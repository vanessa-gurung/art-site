const connection = require('./connection')

module.exports = {
  showDiaryComics
}

// Diary comic component 
function showDiaryComics(db = connection) {
  return db('diary_comics').select(
    'id',
    'date',
    'diary_comic',
  )
}