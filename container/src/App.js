import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import "./tailwind/style.css";

import LandingPage from './components/LandingPage';
// import LoginPage from './components/LoginPage';
import Header from './components/Header';
import Footer from './components/Footer';

export default () => {
    return (
        <BrowserRouter>
            <div className='global_container'>
                <Header />
                <LandingPage />
                <Footer/>
                {/* <LoginPage /> */}
            </div>
        </BrowserRouter>
    );
};