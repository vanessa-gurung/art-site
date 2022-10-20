const connection = require('./connection')

module.exports = { getDiaryComic }

// For diary comic images
function getDiaryComic(db = connection) {
  return db('diaryComics').select('id', 'date', 'diary_comic')
}
