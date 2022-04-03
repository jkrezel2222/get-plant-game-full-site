import Sidebar from "../../sidebar/Sidebar"
import "./dashboard.css"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


export default function Dashboard() {
  return (
    <div className="dashboard">
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
