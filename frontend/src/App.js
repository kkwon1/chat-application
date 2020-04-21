import React from 'react';
import './App.css'
import Header from './scenes/Header/Header'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Header/>
        Enter your name
        <Button component={Link} to= "/chat">
          Enter
        </Button>
      </div>
    )
  }
}

export default App;
