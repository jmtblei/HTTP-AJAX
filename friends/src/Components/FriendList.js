import React from 'react';
import Friend from './Friend';
import { Link } from 'react-router-dom';

const FriendList = (props) => {
    const displayFriends = props.friends.map(friend => {
        return (
            <div>
                <Link to={`/friends/${friend.id}`} key={friend.id} >
                    <Friend  friend={friend}/>
                </Link>
                <button onClick={() => props.deleteFriend(friend.id)}>Delete</button>
            </div>
        );
    });

    return (
        <div>
            {displayFriends}
        </div>
        
    );
}

export default FriendList;