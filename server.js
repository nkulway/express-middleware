const http = require('http')
const express = require('express')
const morgan = require('morgan')
const logger = morgan('tiny')
const helmet = require('helmet')

const hostname = '127.0.0.1'
const port = 3000

const app = express()
const server = http.createServer(app)

// log all requests to console 
app.use(logger)
// helmet secures against common security issues
app.use(helmet())
// sweet logger
app.use('/', (req, res, next) => {
    console.log('This is the home page')
    console.log('SWEET: ', req.method, req.path, req.statusCode)
    next()
})

// check if awesome
app.use('/', (req, res, next) => {
    // does request have secret code
    if (req.query.secret === 'awesome') {
        next()
    } else {
      next('secret incorrect')  
    }
})

// look for files in the public folder
app.use(express.static('public'))



server.listen(port, hostname, () => {
    console.log(`Server running on http://${hostname}:${port}`)
})
