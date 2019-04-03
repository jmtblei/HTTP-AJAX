import React, { Component } from 'react';
import './App.css';
import FriendForm from './Components/FriendForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
        friendInfo: {
            name:'',
            age: '',
            email: ''
        }
    };
}
  render() {
    return (
      <div className="App">
        <FriendForm 
          friendsInfo={this.state.friendsInfo}
          name={this.state.name}
          age={this.state.age}
          email={this.state.email}
        />
      </div>
    );
  }
}

export default App;
