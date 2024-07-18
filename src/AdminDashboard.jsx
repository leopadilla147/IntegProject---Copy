import { Container, Row, Col, Button } from 'react-bootstrap';
import Dashboard from './components/Dashboard';
import PrintReports from './components/PrintReports';
import Settings from './components/Settings';
import Overview from './components/Overview';
import QuantitativeResult from './components/QuantitativeResult';
import Customers from './components/Customers';



function AdminDashboard() {
    return (
        <Container fluid>
            <Row className="bg-dark text-white p-3">
                <Col>
                    <h1>Camarines Norte State College Customer Feedback System</h1>
                </Col>
                <Col className="text-end">
                    <Button variant="outline-light">Logout</Button>
                </Col>
            </Row>
            <Row>
                <Col md={2} className="bg-secondary p-3">
                    <Dashboard />
                    <PrintReports />
                    <Settings />
                </Col>


                <Col md={10} className="p-3">
                    <Col>
                        <div className='justify-content-end'>
                            <Overview />
                        </div>

                    </Col>
                        <Col md={5}>
                            <div className=''>
                                <QuantitativeResult />
                            </div>

                        </Col>


                        <Col md={5}>
                            <div className=''>
                                <Customers />
                            </div>

                        </Col>



                </Col>
            </Row>
        </Container>
    )
}

export default AdminDashboard
