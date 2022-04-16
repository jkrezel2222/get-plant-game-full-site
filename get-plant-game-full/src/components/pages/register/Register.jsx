import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import axios from "axios";


export class Register extends Component {

    
    handleSubmit = e => {
        e.preventDefault();
        const data = {
            admin: {
            username: this.username,
            firstname: this.firstname,
            lastname: this.lastname,
            password: this.password
            }
        };
        console.log(data);
        axios.post("http://localhost:5000/api/v1/admins", data)
        .then(
            res => {
                console.log(res)
            }
        ).catch(
            err => {
                console.log(err);
            }
        )
    };

    render() {
        return (
        
        <form onSubmit={this.handleSubmit} >
            <h3>Register</h3>

            <Form.Group className="form-group">
                <label>Username</label>
                <input type="text" className="form-control" placeholder="Username" 
                onChange={e => this.username = e.target.value} />
            </Form.Group>
            
            <Form.Group className="form-group">
                <label>First Name</label>
                <input type="text" className="form-control" placeholder="First name" 
                onChange={e => this.firstname = e.target.value} />
            </Form.Group>

            <Form.Group className="form-group">
                <label>Last Name</label>
                <input type="text" className="form-control" placeholder="Last name" 
                onChange={e => this.lastname = e.target.value} />
            </Form.Group>

            <Form.Group className="form-group">
                <label>Password</label>
                <input type="Password" className="form-control" placeholder="Password" 
                onChange={e => this.password = e.target.value} />
            </Form.Group>

            <button className="btn btn-success" >Register</button>


        </form>

        )
    }
}

export default Register
