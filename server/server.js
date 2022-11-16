const express = require('express')
const path = require('path')

const diaryComicRoutes = require('./routes/diaryComics')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/diaryComics', diaryComicRoutes)

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'index.html'))
})

module.exports = server
