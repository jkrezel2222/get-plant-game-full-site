import { Component } from 'react'

export class Register extends Component {

    state = {
        username: '',
        firstName: '',
        lastName: '',
        password: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    
    handleSubmit = (event) => {
        event.preventDefault()
        this.props.register(this.state) 
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <br />
                <br />
                <br />
                <h3>Register here</h3>
                <label>Username :</label>
                <input name='username' value={this.state.username} onChange={this.handleChange}/>
                <label>First Name :</label>
                <input name='firstName' value={this.state.firstName} onChange={this.handleChange}/>
                <label>Last Name :</label>
                <input name='lastName'  value={this.state.lastName} onChange={this.handleChange}/>
                <label>Password :</label>
                <input name='password' type='password' value={this.state.password} onChange={this.handleChange}/>
                <input type='submit' value='Register'/> 
            </form>
        )
    }
}
export default Register