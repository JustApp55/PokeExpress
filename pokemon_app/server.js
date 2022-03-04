const express = require('express')
const app = express()




app.get('/', (req, res) => {
    res.send('Welcome to the Pokemon App!')
})


var port = process.env.PORT || 3000;



app.listen(3000, () => {
    console.log('listening');
});