
import { Navbar, Container, Nav, Form, Dropdown } from 'react-bootstrap';

const TopSubNav = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link>
                            <Form.Check type="checkbox" label="All" id="checkbox-all" />
                        </Nav.Link>
                    </Nav>
                    <Nav className="ms-auto">
                        <Dropdown>
                            <Dropdown.Toggle variant="light" id="dropdown-semester">
                                Semester
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item>Spring</Dropdown.Item>
                                <Dropdown.Item>Summer</Dropdown.Item>
                                <Dropdown.Item>Fall</Dropdown.Item>
                                <Dropdown.Item>Winter</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown>
                            <Dropdown.Toggle variant="light" id="dropdown-academic-year">
                                Academic Year
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item>2023-2024</Dropdown.Item>
                                <Dropdown.Item>2024-2025</Dropdown.Item>
                                <Dropdown.Item>2025-2026</Dropdown.Item>
                                {/* Add more academic years as needed */}
                            </Dropdown.Menu>
                        </Dropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default TopSubNav;
