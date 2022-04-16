import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import axios from "axios";


export default class Login extends Component {

    handleSubmit = e => {
        e.preventDefault();

        const data = {
            username: this.username,
            password: this.password
        };
        axios.post("http://localhost:5000/api/v1/login", data)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
    };
    


  render() {
    return (
        <form onSubmit={this.handleSubmit} >
        <br />
        <h3>Login</h3>

        <Form.Group className="form-group">
            <label>Username</label>
            <input type="text" className="form-control" placeholder="Username" 
            onChange={e => this.username = e.target.value} />
        </Form.Group>

        <Form.Group className="form-group">
            <label>Password</label>
            <input type="Password" className="form-control" placeholder="Password" 
            onChange={e => this.password = e.target.value} />
        </Form.Group>

        <button className="btn btn-success" >Login</button>


    </form>
    )
  }
}
