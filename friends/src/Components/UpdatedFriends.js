import React from 'react';
import UpdateForm from './UpdateForm';
import { Link } from 'react-router-dom';

const UpdatedFriends = props => {
    const friendId = props.match.params.id;
    const friend = props.friends.find(friend => friend.id.toString() === friendId)
    return (
        <div>
            <Link to="/"><button>Home</button></Link>
            <UpdateForm  history={props.history} updateFriend={props.updateFriend} id={friendId}/>
            <h4>Name: {friend.name}</h4>
            <h4>Age: {friend.age}</h4>
            <h4>Email: {friend.email}</h4>    
        </div>        
    );
}

export default UpdatedFriends; 