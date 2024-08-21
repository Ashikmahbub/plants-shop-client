import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLocation } from 'react-router-dom';

const Main = () => {
    const location = useLocation();
    const noHeaderFooter = location.pathname.includes('login') ||
    location.pathname.includes('signup');
    return (
        <div>
            <div>
        { noHeaderFooter || <Navbar /> }  // Navbar is shown unless noHeaderFooter is true
        <Outlet />                        // The content of the child routes is rendered here
        { noHeaderFooter || <Footer /> }  // Footer is shown unless noHeaderFooter is true
    </div>
            
        </div>
    );
};

export default Main;