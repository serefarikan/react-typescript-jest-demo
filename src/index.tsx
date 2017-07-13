import axios from 'axios'
import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  return (
    <div className="container">
        <div className="page-header">
            <h1>Bootstrap grid examples from tsx</h1>
            <p>Hello World again change</p>
        </div>
    </div>
  )
}

// const url = 'https://api.spotify.com/v1/artists/0OdUWJ0sBjDrqHygGUXeCF'
// axios.get(url).then(response => console.log(response));

ReactDOM.render( <App />, document.getElementById('app'))
