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
// look for files in the public folder
app.use(express.static('public'))

server.listen(port, hostname, () => {
    console.log(`Server running on http://${hostname}:${port}`)
})
