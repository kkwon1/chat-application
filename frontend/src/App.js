import React from 'react';
import './App.css'
import Header from './scenes/Header/Header'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      usernameInput: ""
    }
  }

  updateUsernameInput(evt) {
    this.setState({
      usernameInput: evt.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <Header/>
        Enter your name
        
        <form>
          <label>
            <input value={this.state.usernameInput} onChange={evt => this.updateUsernameInput(evt)} />
          </label>
        </form>
        <div className="ChatButton">
          <Link
            to= {{
              pathname: '/chat',
              state: {
                username: this.state.usernameInput
              }
            }}
          >
            <Button>
              Enter
            </Button>
          </Link>
        </div>
      </div>
    )
  }
}

export default App;
