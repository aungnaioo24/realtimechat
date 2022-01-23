// import node modules
const express = require('express')
const path = require('path')
const cors = require('cors')

// import files
const corsOptions = require('./config/corsOptions')
const { logger } = require('./middleware/logEvents')
const errorHandler = require('./middleware/errorHandler')

// create express object
const app = express()

// middleware
app.use(logger)
app.use(cors(corsOptions))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// serve static files
app.use('/', express.static(path.join(__dirname, '/public')))

// routes
app.use('/', require('./routes/root'))
// example route with controller and model, check exampleController.js(controllers) and Example.js(models)
// app.use('/example', require('./routes/example'))

// use error handler middleware for exporting error logs
app.use(errorHandler)

module.exports = app