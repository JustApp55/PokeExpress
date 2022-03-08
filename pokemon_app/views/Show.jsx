const React = require('react');



  class Show extends React.Component {
    render() {
        //destructering same as poke = this.props.poke
        const { pokemon } = this.props
        const pokename = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)

        if(pokemon.name == 'bulbasaur' || pokenmon.name == 'ivysaur' || pokemon.name == 'venusaur') {
          return (
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Pokèmon</title>
    </head>

            <body style={{backgroundColor: '#eaf4f4'}}>
                
                  <h1><img src='https://assets.pokemon.com/assets/cms2/img/watch-pokemon-tv/seasons/season09/season09_ep45_ss01.jpg' ></img>Gotaa Catch 'Em All</h1>
                  <h2 style = {{color:'#00bbf9'}}>{pokename}</h2>
                  <img src={pokemon.img + '.jpg'} alt=""/> <br></br>
                  <a href="/pokemon">Back To PokèDex</a>                
                
            </body>
    </html>
          )} else if (pokemon.name == 'charmander' || pokemon.name == 'charizard' ) {
            return (
              <body style={{backgroundColor: '#ffcb77'}}>
                
                  <h1><img src='https://assets.pokemon.com/assets/cms2/img/watch-pokemon-tv/seasons/season09/season09_ep45_ss01.jpg' ></img>Gotaa Catch 'Em All</h1>
                  <h2 style = {{color:'#00bbf9'}}>{pokename}</h2>
                  <img src={pokemon.img + '.jpg'} alt=""/> <br></br>
                  <a href="/pokemon">Back To PokèDex</a>                
                
            </body>
            )
          } else if (pokemon.name == 'squirtle' || pokemon.name == 'wartortle' ) {
            return (
              <body style={{backgroundColor: '#17c3b2'}}>
                
                  <h1><img src='https://assets.pokemon.com/assets/cms2/img/watch-pokemon-tv/seasons/season09/season09_ep45_ss01.jpg' ></img>Gotaa Catch 'Em All</h1>
                  <h2 style = {{color:'#00bbf9'}}>{pokename}</h2>
                  <img src={pokemon.img + '.jpg'} alt=""/> <br></br>
                  <a href="/pokemon">Back To PokèDex</a>                
                
            </body>
            )
          }
          }
    }
      

  module.exports = Show

  