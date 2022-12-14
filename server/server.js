const path = require('path')
const express = require('express')

const announcementsRoutes = require('./routes/diaryComics')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/diarycomics', diaryComicsRoutes)

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'index.html'))
})

module.exports = server
