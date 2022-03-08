const React = require('react');



  class Index extends React.Component {
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
                  <h1 style = {{color:'#023e8a'}}>See All The Pokemon!</h1>

                   <ul>
                        {pokemon.map((poke, i) => {
                         
                            return (
                                <li>
                                    <a style = {{color:'#14213d'}} href={`/pokemon/${i}`}>
                                        {poke.name}
                                    </a>
                                    <br></br>
                                </li>
                            );
                        })}
                    </ul>
                 
              </div>
              </body>
   </html>
        )}
    }

  module.exports = Index






















  //   const pokeName = poke.name.charAt(0).toUpperCase() + poke.name.slice(1)