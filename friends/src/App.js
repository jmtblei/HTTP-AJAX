import React, { Component } from 'react';
import './App.css';
import FriendForm from './Components/FriendForm';
import FriendList from './Components/FriendList';

class App extends Component {
  constructor() {
    super();
    this.state = {
        friends: [],
            name:'',
            age: '',
            email: ''
    };
  }

  handleChange = event => {
    this.setState({
            [event.target.name]: event.target.value
    })
  };

addFriend = event => {
    event.preventDefault();
    const newFriend = {
      age: this.state.age,
      name: this.state.name,
      email: this.state.email
    }
    this.setState({
      friends: [...this.state.friends, newFriend],
      name:'',
      age: '',
      email: ''
    })
  };

  render() {
    return (
      <div className="App">
        <FriendForm 
          friends={this.state.friends}
          name={this.state.name}
          age={this.state.age}
          email={this.state.email}
          handleChange={this.handleChange}
          addFriend={this.addFriend}
        />
        <FriendList 
          friends={this.state.friends}
        />
      </div>
    );
  }
}

export default App;
