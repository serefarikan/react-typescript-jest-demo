import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

const App = () => {
  return (
    <div>
      <p>Hello World</p>
    </div>
  )
}

const url = 'https://api.spotify.com/v1/artists/0OdUWJ0sBjDrqHygGUXeCF'
axios.get(url).then(response => console.log(response));

ReactDOM.render( <App />, document.getElementById('app'))
