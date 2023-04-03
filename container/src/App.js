import React from 'react';
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import Header from './components/Header';
import "./tailwind/style.css";

export default () => {
    return (
        <div className='global_container'>
            <Header />
            <LandingPage />
            <div>---------------placeholder-----------------</div>
            <LoginPage />
        </div>
    );
};