// required packages
const express = require('express')

// config an instance of express
const app = express()
const PORT = 3000
app.set('view engine', 'ejs')

// define some routes
app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.get('/search', (req, res) => {
    // take in form data
    // make an http request to the SWAPI
    // render the data to the user
})

// listen on a port
app.listen(PORT, () => {
    console.log(`aaaaaaarrrrrrrhhhghghghgghghgh ${PORT}`)
})