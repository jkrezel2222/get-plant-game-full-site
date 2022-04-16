import "./login.css"
import { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from "react-router-dom";



export default class Login extends Component {
  
  //token based authentication, store it in local storage
  //use redux for state

  state = {
      username: '',
      password: '',
  }  
  
//   const API = "/api/v1/login";

    // fetch(`${API}/login`, {
    //     method: "Post",
    //     headers: {"Content-Type": "application/json"},
    //     body: JSON.stringify({email: Form.Control.email, password: Form.Control.password})
    // }).then(resp => resp.json())
    // .then(data => {
    //     localStorage.setItem("token", data.token)
    //     setAdmin(data.admin)
    // })

  
  render() {
    return (
        <div className="login" >
            <div className="container">
                <h3 className="loginTitle">Login</h3>
            <div>
            <Form className="loginForm">
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formUserName">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="username" placeholder="Enter username" name="username" />
                    </Form.Group>
                </Row>

                <Row className="formRow">
                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" name="password" />
                        </Form.Group>
                </Row>

                    <Button className="buttonLogin" variant="success" type="submit">
                    Login
                    </Button>
                    <Link to="/register">
                    <Button variant="light" type="submit" >
                    Register
                    </Button>
                    </Link>
            </Form>
            </div>
            </div>
        </div>
        )
    }
}
