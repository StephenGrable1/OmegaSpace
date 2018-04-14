import React from 'react'
require('es6-promise').polyfill();
require('isomorphic-fetch');

import ReactQuill from 'react-quill';
import OmegaLogo from '../assets/OmegaSpace.png';
import GithubLogo from '../assets/GithubLogo.png';

import openSocket from 'socket.io-client';
const  socket = openSocket('http://localhost:8000');

import './Home.css'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = { text: '' }
    this.handleChange = this.handleChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
    // this.listenToSocket = this.listenToSocket.bind(this);
    this.changeState = this.changeState.bind(this);
  }

  componentDidMount(){
      fetch('/api/gettext')
        .then(res => res.json())
        .then(data => this.setState({ text: data }));
        socket.on('subscribeToText', (text) => {
          this.changeState(text);
        });
    }

    componentDidUpdate() {

    }

    changeState(text) {
      this.setState({text: text});
    }

  handleChange(value) {
    console.log("This is it: " , value.length, this.state.text.length);
    if(value.length !== this.state.text.length) {
        console.log("I am Emitting");
        socket.emit('toText', value);
      }
  }

  handleSave() {
    fetch('/api/savetext', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({text: this.state.text})
    })
      .then(res => res.json())
      .then(data => console.log('here is data from server: ', data))
  }
  render() {
    return (
      <div>
        <div className="top-nav">
          <div className="omega-logo">
            <img src={OmegaLogo} alt='OmegaSpace Logo' />
          </div>

          <div onClick={this.handleSave} className="save-button">
            Save
          </div>

          <div className="github-logo">
            <a href="https://github.com/StephenGrable1/OmegaSpace">
              <img src={GithubLogo} alt="Github Logo" />
            </a>
          </div>
        </div>
        <ReactQuill placeholder={'Start your Omega journey... '} value={this.state.text} onChange={this.handleChange} />
      </div>
    );
  }
};

export default Home;