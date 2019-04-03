import React from 'react';

const FriendForm = props => {
    return(
        <div>
            <h2>Let's be friends FOREVER!</h2>
            <form>
               <input
               type="text"
               name="name"
               placeholder="Enter your name"
               value={props.name}
               />
               <input
               type="text"
               name="age"
               placeholder="Enter your age"
               value={props.age}
               />
               <input
               type="text"
               name="email"
               placeholder="Enter your email"
               value={props.email}
               /> 
            </form>
        </div>
    )
}


export default FriendForm;