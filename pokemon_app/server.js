// Import the express library here
const express = require('express')
// Instantiate the app here
const app = express()
const port = 3000
const pokemon = require('./models/pokemon.js')


app.set('view engine', 'jsx');
  app.engine('jsx', require('express-react-views').createEngine());


app.get('/', (req, res) => {
    res.send('Welcome to the Pokemon App!')
})

app.get('/pokemon', (req, res)=> {
    res.render('Index', {pokemon: pokemon}
    )
})

app.get('/pokemon/:id', (req, res)=> {
    res.send('Show', {pokemon: pokemon[req.params.id]})
})




// app.listen(port,() => {
//     console.log('listening on port' , port);
// });

// Invoke the app's `.listen()` method 
app.listen(PORT, ()=>{
    console.log(`${PORT}`)
})