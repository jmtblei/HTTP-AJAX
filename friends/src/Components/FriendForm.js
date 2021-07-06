import React from 'react';

class FriendForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            friendInfo: {
                name:'',
                age: '',
                email: ''
            }
        };
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    clearForm = () => {
        this.setState({
            name: '',
            age: '',
            email: ''
        })
    }

    render() {
        return(
            <div>
                <h2>Let's be friends FOREVER!</h2>
                <form onSubmit={(event) =>{
                    event.preventDefault();
                    this.props.addFriend(this.state);
                    this.clearForm();
                    }}>
                   <input
                   type="text"
                   name="name"
                   placeholder="Enter your name"
                   onChange={this.handleChange}
                   value={this.state.name}
                   />
                   <input
                   type="number"
                   name="age"
                   placeholder="Enter your age"
                   onChange={this.handleChange}
                   value={this.state.age}
                   />
                   <input
                   type="email"
                   name="email"
                   placeholder="Enter your email"
                   onChange={this.handleChange}
                   value={this.state.email}
                   /> 
                   <button>BFF's FOREVER</button>
                </form>
            </div>
        )
    }
}


export default FriendForm;