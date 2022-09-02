// required packages
const express = require('express')

// config an instance of express
const app = express()
const PORT = 3000
app.set('view engine', 'ejs')

// define some routes
app.get('/', (req, res) => {
    res.send('Welcome to the Star Wars search engine')
})

// listen on a port
app.listen(PORT, () => {
    console.log(`aaaaaaarrrrrrrhhhghghghgghghgh`)
})