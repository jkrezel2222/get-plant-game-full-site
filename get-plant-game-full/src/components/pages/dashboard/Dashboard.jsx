import "./dashboard.css"
import { Component } from "react";
import { Register } from "../register/Register";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


export default class Dashboard extends Component {

    state = {
        admin: {}
      }

      register = admin => {
        fetch('http://localhost:5000/api/v1/admins', {
          method: "POST",
          headers: {
              "Accept": "application/json",
              "Content-Type": "application/json"
          },
          body: JSON.stringify({
            admin:{
              username: admin.username,
              password: admin.password,
              firstname: admin.firstname,
              lastname: admin.lastname
            }
          })
        })
        .then(response => response.json())
        .then(admin => this.setState({ admin: admin }) )
      }


    render(){
        return (
            <div className="dashboard">

                <div>
                    {this.state.admin.username ? <h3>{this.state.admin.firstname}</h3> :
                    <Register register={this.register} />
                    }
                </div>

                <div className="dashboardWrapper">
                    <div className="dashboardTitle">
                        <span className="dashboardUpdateTitle">Update your account</span>
                    </div>
                    <div className="dashboardTitle">
                        <span className="dashboardDeleteTitle">Delete account</span>
                    </div>

                    <div>
                        <Form className="dashboardForm">
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                            </Row>

                                <Button variant="success" type="submit">
                                Update
                                </Button>
                        </Form>
                    </div>

                </div>
            </div>
        )
    }
}
