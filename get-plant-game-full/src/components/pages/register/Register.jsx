import "./register.css"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';



export default function Register() {
  return (
    <div className="register" >
        <div className="container">
            <h3 className="registerTitle">Register here</h3>
        <div>
            <Form className="registerForm">
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

                    <Button className="buttonRegister" variant="success" type="submit">
                    Submit
                    </Button>
            </Form>
        </div>
        </div>
    </div>
  )
}
