
const express = require('express')
const checkJwt = require('../auth0')
const db = require('../db/diaryComics')

const router = express.Router()

module.exports = router

// GET /api/v1/diarycomics
router.get('/', async (req, res) => {
  try {
    const diary = await db.showDiaryComics()
    res.json({ diary })
  } catch (err) {
    console.error(err)
    res.status(500).send(err.message)
  }
})