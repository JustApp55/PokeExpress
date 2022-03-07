const React = require('react');



  class Show extends React.Component {
    render() {
        //destructering same as poke = this.props.poke
        const { pokemon } = this.props
        return (
<html lang="en">
 <head>
   <meta charset="UTF-8" />
   <meta http-equiv="X-UA-Compatible" content="IE=edge" />
   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
   <title>PokeExpress</title>
 </head>
            <body style={{backgroundColor: '#eaf4f4'}}>
                <div>
                  <h1 style = {{color:'#023e8a'}}>Gotaa Catch 'Em All</h1>
                  <h2 style = {{color:'#023e8a'}}>{pokemon.name}</h2>
                  <img src={pokemon.img + '.jpg'} alt=""/> <br></br>
                  <a href="/pokemon">Back To Pokèmon</a>                
                </div>
            </body>
 </html>
        )}
    }
      

  module.exports = Show

  