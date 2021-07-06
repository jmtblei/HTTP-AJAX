import React from 'react';

const Friend = props => {
    return(
        <div>
            <h4>Name: {props.friend.name}</h4>
            <h4>Age: {props.friend.age}</h4>
            <h4>Email: {props.friend.email}</h4>
        </div>
    )
}

export default Friend;