const express = require('express')
const db = require('../db/diarycomics')

const router = express.Router()

module.exports = router

// GET /api/v1/diaryComics
router.get('/', async (req, res) => {
  try {
    const diaryComic = await db.getDiaryComic()
    res.json({ diaryComic })
  } catch (err) {
    console.error(err)
    res.status(500).send(err.message)
  }
})
