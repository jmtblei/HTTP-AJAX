import React, { Component } from 'react';
import './App.css';
import FriendForm from './Components/FriendForm';
import FriendList from './Components/FriendList';
import axios from 'axios';

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

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends/")
      .then(res => {
        this.setState({ friends: res.data });
      })
      .catch(err => console.log(err));
  }

  handleChange = event => {
    this.setState({
            [event.target.name]: event.target.value
    })
  };

  addFriend = event => {
    event.preventDefault();
    const thisfriend = {
      age: this.state.age,
      name: this.state.name,
      email: this.state.email
    }
    axios
        .post("http://localhost:5000/friends/", thisfriend)
        .then(res => {
          this.setState({
            friends: res.data,
            age: '',
            name: '',
            email: ''
          });
        })
        .catch(err => console.log(err));
  };

  deleteFriend = id => {
    axios
    .delete(`http://localhost:5000/friends/${id}`)
    .then(res => {
      this.setState({
        friends: res.data
      });
    })
    .catch(err => console.log(err))
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
          deleteFriend={this.deleteFriend}
        />
      </div>
    );
  }
}

export default App;
