import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import "./tailwind/style.css";

import LandingPage from './components/LandingPage';
// import LoginPage from './components/LoginPage';
import Header from './components/Header';
import Footer from './components/Footer';
import LoginPage from './components/LoginPage';

export default () => {
    return (
        <BrowserRouter>
            <div className='global_container'>
                <Switch>
                    <Route path='/auth' render={()=><LoginPage />} />
                    <Route path='/' render={()=><div><Header /><LandingPage /><Footer /> </div>} />
                    <Route path='*' render={()=><h1>404 Not Found</h1>} />
                </Switch>
            </div>
        </BrowserRouter>
    );
};