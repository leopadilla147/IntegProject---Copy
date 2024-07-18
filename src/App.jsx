
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Welcome from './Welcome.jsx';
import Login from './Login';
import AdminLogin from './AdminLogin.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import SideNav from './components/SideNav.jsx';
import PropTypes from 'prop-types';

// Define your routes using createBrowserRouter
const router = createBrowserRouter([
  {
    path: '/',
    element: <Welcome />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/login/adminlogin',
    element: <AdminLogin />
  },
  {
    path: '/login/adminlogin/officeheadloginpage',
    element: (
      <AppLayout>
        <Header />
        <SideNav />
        <Footer />
      </AppLayout>
    )
  },
  {
    path: '/login/adminlogin/adminloginpage',
    element: (
      <AppLayout>
        <Header />
        <SideNav />
        <Footer />
      </AppLayout>
    )
  }
]);

// AppLayout component to encapsulate main application structure
const AppLayout = ({ children }) => (
  <div style={styles.appContainer}>
    <div style={styles.header}>
      {/* Header content */}
      <h1>Header</h1>
    </div>
    <div style={styles.content}>
      {/* SideNav and Main content */}
      {children}
    </div>
    <div style={styles.footer}>
      {/* Footer content */}
      <h1>Footer</h1>
    </div>
  </div>
);

AppLayout.propTypes = {
  children: PropTypes.node.isRequired, // Ensure 'children' is required and can be any React node
};

const styles = {
  appContainer: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  header: {
    height: '50px', // Adjust header height as needed
    backgroundColor: 'lightblue',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    display: 'flex',
    flexGrow: 1,
    overflowX: 'hidden',
  },
  footer: {
    height: '50px', // Adjust footer height as needed
    backgroundColor: 'lightgreen',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

const App = () => (
  <>
    <RouterProvider router={router} />
  </>
);

export default App;
