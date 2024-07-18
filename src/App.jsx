
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Welcome from './Welcome.jsx';
import Login from './Login';
import AdminLogin from './AdminLogin.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
/* import SideNav from './components/SideNav.jsx';
import TopSubNav from './components/TopSubNav.jsx' */
import AdminDashboard from './AdminDashboard.jsx';
//import AdminLoginPage from './AdminLoginPage.jsx';
//import AdminDashboardHeader from './components/AdminDashboardHeader.jsx';
//import PropTypes from 'prop-types';

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
      <>
        <Header />
        <Footer />
      </>
    )
  },
  {
    path: '/login/adminlogin/adminloginpage',
    element: (
      <>
        <Header />
        <Footer />
      </>
    )
  },
  {
    path: '/login/adminlogin/admindashboard',
    element: (
      <>
        {/* <AdminDashboardHeader /> */}
        <AdminDashboard />
        <Footer />
      </>
    )
  }
]);

const App = () => (
  <>
    <RouterProvider router={router} />
  </>
);

export default App;
