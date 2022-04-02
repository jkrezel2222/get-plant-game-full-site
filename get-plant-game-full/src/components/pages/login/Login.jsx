import "./login.css"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from "react-router-dom";



export default function Login() {
  
  //token based authentication, store it in local storage
  //use redux for state

  
  
    return (
    <div className="login" >
        <div className="container">
        <h3 className="loginTitle">Login</h3>
        <div>
            <Form className="loginForm">
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                </Row>

                <Row className="formRow">
                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                </Row>

                    <Button className="buttonLogin" variant="success" type="submit">
                    Login
                    </Button>
                    <Link to="/register">
                    <Button variant="light" type="submit">
                    Register
                    </Button>
                    </Link>
            </Form>
        </div>
        </div>
    </div>
  )
}
