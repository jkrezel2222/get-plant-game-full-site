import "./register.css"
import { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';



export default class Register extends Component {

    state = {
        response: '',
        username: '',
        password: '',
        firstname: '',
        lastname: ''
    };
    
    componentDidMount() {
        this.callAPI()
        .then(res => this.setState({ response: res.admin }))
        .catch(err => console.log(err));
    }

    callAPI = async () => {
        const response = await fetch("/api/v1/admins");
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);

        return body;
    };



    handleSubmit = async e => {
        e.preventDefault();
        const response = await fetch("/api/v1/admins", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ 
                response: this.state.response,
                username: this.state.username,
                password: this.state.password,
                firstname: this.state.firstname,
                lastname: this.state.lastname
            }),
        });
        const body = await response.text();

        this.setState({ 
            username: body,
            password: body,
            firstname: body,
            lastname: body 
        });
    };

    render() {

        return (
            <div className="register" >
                
                <div className="container">
                    <h3 className="registerTitle">Register here</h3>
                <div className="form-group">
                    <Form className="registerForm">
                    <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" placeholder="Enter username" name="username" 
                                value={this.state.username} onChange={e => this.setState({ username: e.target.value })} />
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridFirstname">
                                <Form.Label>First name</Form.Label>
                                <Form.Control type="text" placeholder="Enter first name" name="firstname" 
                                value={this.state.firstname} onChange={e => this.setState({ firstname: e.target.value })} />
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridLastname">
                                <Form.Label>Last name</Form.Label>
                                <Form.Control type="text" placeholder="Enter last name" name="lastname" 
                                value={this.state.lastname} onChange={e => this.setState({ lastname: e.target.value })} />
                            </Form.Group>
                        </Row>

                        <Row className="formRow">
                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" name="password" 
                                value={this.state.password} onChange={e => this.setState({ password: e.target.value })} />
                                </Form.Group>
                        </Row>

                            <Button className="buttonRegister" variant="success" type="submit"
                            onSubmit={this.handleSubmit} >
                            Register
                            </Button>
                    </Form>
                </div>
                </div>
            </div>
        )
    }
}
