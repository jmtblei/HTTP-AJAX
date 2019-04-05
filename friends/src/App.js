import React, { Component } from 'react';
import './App.css';
import FriendForm from './Components/FriendForm';
import FriendList from './Components/FriendList';
import UpdatedFriends from './Components/UpdatedFriends';
import axios from 'axios';
import { Route } from 'react-router-dom';

class App extends Component {
  constructor(){
    super();
    this.state = {
      friends: [],

    }
  }

  componentDidMount(){
    axios.get('http://localhost:5000/friends')
      .then(response => {
        //console.log(response); 
        this.setState({friends: response.data})
      })
      .catch(err => console.log(err));

  }

  addFriend = friend => {
    axios.post('http://localhost:5000/friends', friend)
      .then(response => this.setState({friends: response.data}))
      .catch(err => console.log(err));
  }

  updateFriend= (friend, id) => {
    axios
      .put(`http://localhost:5000/friends/${id}`, friend)
      .then(response => {
        console.log('edit friend', response);
        this.setState({
          friends: response.data
        });
      })
      .catch(err => console.log(err));

  };

  deleteFriend = id => {
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(response => {
        console.log(response);
        this.setState({
          friends: response.data
        });
      })
      .catch(err => console.log(err));
  };


  render() {
    if(!this.state.friends.length){
      return <h1>Loading</h1>;
    }

    return (
      <div className="App">
        <Route
          exact 
          path="/" 
          render={props => {
          return (
          <div>
            <FriendForm addFriend={this.addFriend} /> 
            <FriendList {...props} friends={this.state.friends} deleteFriend={this.deleteFriend}/>
          </div>
          );

          }} />

        <Route 
          path="/friends/:id" 
        render={props => <UpdatedFriends {...props} friends={this.state.friends} updateFriend={this.updateFriend}/> } /> 
      </div>
    );
  }
}

export default App;
