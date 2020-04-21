import React from 'react'
import { connect, sendMsg } from '../../api'
import './styles/index.scss'
import Header from '../Header/Header'
import ChatHistory from './components/ChatHistory/ChatHistory'
import ChatInput from './components/ChatInput/ChatInput'


class ChatRoom extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      chatHistory: []
    }

    this.send = this.send.bind(this)
  }
  
  componentDidMount() {
    connect((msg) => {
      console.log("New Message")
      this.setState({
        chatHistory: [...this.state.chatHistory, msg]
      })
      console.log(this.state);
    });
  }

  send(event) {
    if(event.keyCode === 13) {
      sendMsg(this.props.username + ": " + event.target.value);
      event.target.value = "";
    }
  }

  render() {
    return (
      <div className="ChatRoom">
        <Header/>
        <ChatHistory chatHistory={this.state.chatHistory} />
        <ChatInput send={this.send} />
        <button onClick={this.send}>Hit</button>
      </div>
    )
  }
}

export default ChatRoom;
