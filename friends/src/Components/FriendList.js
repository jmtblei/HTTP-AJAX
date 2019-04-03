import React from 'react';
import Friend from './Friend';

const FriendList = props => {
    return(
        <div>
            {props.friends.map(friend => (
                <Friend 
                    key={friend.id}
                    friend={friend}
                />
            ))}
        </div>
    )
}

export default FriendList;