import React from 'react';

class UpdateForm extends React.Component {
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

    handlerChange = event => {
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
                <h2>Update Friend</h2>
                <form onSubmit={(event) =>{
                    event.preventDefault();
                    this.props.updateFriend(this.state, this.props.id);
                    this.clearForm();
                    this.props.history.push("/");
                }}>
                   <input
                   type="text"
                   name="name"
                   placeholder="Update name"
                   onChange={this.handlerChange}
                   value={this.state.name}
                   />
                   <input
                   type="number"
                   name="age"
                   placeholder="update age"
                   onChange={this.handlerChange}
                   value={this.state.age}
                   />
                   <input
                   type="email"
                   name="email"
                   placeholder="update email"
                   onChange={this.handlerChange}
                   value={this.state.email}
                   /> 
                   <button>Update</button>
                </form>
            </div>
        )
    }
}


export default UpdateForm;