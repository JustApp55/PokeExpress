const express = require('express')
const pokemon = require('./models/pokemon.js')
const app = express()





app.get('/', (req, res) => {
    res.send('Welcome to the Pokemon App!')
})

app.get('/pokemon', (req, res)=> {
    res.send(pokemon)
})


var port = process.env.PORT || 3000;



app.listen(3000, () => {
    console.log('listening');
});