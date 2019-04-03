import React from 'react';

const FriendForm = props => {
    return(
        <div>
            <h2>Let's be friends FOREVER!</h2>
            <form onSubmit={props.addFriend}>
               <input
               type="text"
               name="name"
               placeholder="Enter your name"
               value={props.name}
               onChange={props.handleChange}
               />
               <input
               type="number"
               name="age"
               placeholder="Enter your age"
               value={props.age}
               onChange={props.handleChange}
               />
               <input
               type="text"
               name="email"
               placeholder="Enter your email"
               value={props.email}
               onChange={props.handleChange}
               /> 
               <button>BFF's FOREVER</button>
            </form>
        </div>
    )
}


export default FriendForm;