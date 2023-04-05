import React, { useRef } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./tailwind/style.css";

import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import Header from './components/Header';
import Footer from './components/Footer';

export default () => {

    const ref = useRef(null);

    return (
        <BrowserRouter>
            <div className='global_container'>
                <Routes>
                    <Route path='/auth/*' element={<LoginPage />} />
                    <Route path='/*' element={<div><Header /><LandingPage /><Footer /> </div>} >
                    </Route>
                    <Route path='*' element={<h1>404 Not Found</h1>} />
                </Routes>
            </div>
        </BrowserRouter>
    );
};