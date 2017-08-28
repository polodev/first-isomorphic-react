var express = require('express')
var html = require('./render')

const server = express()

server.use(express.static('client'))
server.set('view engine', 'ejs')
server.get('/', function (req, res) {
  res.render('index', {
    html: html
  })
})
server.listen(3000, function () {
  console.log(html)
})
