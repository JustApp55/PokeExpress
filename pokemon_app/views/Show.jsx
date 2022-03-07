const React = require('react');



  class Show extends React.Component {
      render() {
        const myStyle = {
            color: '#ffffff',
            backgroundColor: '#000000',
          };
        return ( 
          <div style={myStyle}>My First React Component!</div>
        )
      }
      
  }

  module.exports = Show

  