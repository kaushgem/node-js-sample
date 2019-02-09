var express = require('express')
var app = express()
var email = require('./email.js')

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send('Hello World! This is awesomeoooo awesome!!!!')
})

app.get('/contact', function(request, response) {
  response.redirect(301, 'http://google.com')
})

app.get('/email', function(request, response) {
  response.send('Mail Sent!')
  email.sendMail()
})

app.get('/kaush', function(request, response) {
  response.redirect(301, 'https://github.com/kaushgem')
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
