require('dotenv').config()
const express = require('express')
const { join }  = require('path')

const db = require('./config')
const app = express()

app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.engine('.hbs', require('express-handlebars')({ extname: '.hbs' }))
app.set('view engine', '.hbs')

require('./routes')(app)

db.sync()
    .then(() => app.listen(process.env.PORT))
    .catch(e => console.log(e))




