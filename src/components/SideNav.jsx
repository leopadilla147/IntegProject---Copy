import { Nav, Button } from 'react-bootstrap';
import { BsFillHouseDoorFill, BsFileEarmarkText, BsGearWideConnected } from 'react-icons/bs';

const SideNav = () => {
    return (
        <div style={styles.container}>
            <div style={styles.title}>Admin</div>
            <Nav className="flex-column">
                <Nav.Item>
                    <Button variant="outline-dark" style={styles.button}>
                        <BsFillHouseDoorFill style={styles.icon} />
                        Dashboard
                    </Button>
                </Nav.Item>
                <Nav.Item>
                    <Button variant="outline-dark" style={styles.button}>
                        <BsFileEarmarkText style={styles.icon} />
                        Print Reports
                    </Button>
                </Nav.Item>
                <Nav.Item>
                    <Button variant="outline-dark" style={styles.button}>
                        <BsGearWideConnected style={styles.icon} />
                        Settings
                    </Button>
                </Nav.Item>
            </Nav>
        </div>
    );
};

const styles = {
    container: {
        width: '250px',
        height: 'calc(100vh - 300px)', // Adjust as per your header and footer height
        position: 'sticky',
        top: '95px', // Adjust top position to clear the header
        bottom: '15px',
        left: '10px',
        backgroundColor: '#343a40',
        color: 'white',
        padding: '20px',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
        overflowY: 'auto', // Enable scrolling if content exceeds sidebar height
        borderRadius: '10px', // Border radius for rounded corners
    },
    title: {
        fontSize: '24px',
        fontWeight: 'bold',
        marginBottom: '20px',
    },
    button: {
        marginBottom: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    icon: {
        marginRight: '10px',
    },
};

export default SideNav;
