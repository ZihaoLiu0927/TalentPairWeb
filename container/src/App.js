import React, { lazy, Suspense, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./tailwind/style.css";

import Header from './components/Header';
import Footer from './components/Footer';
import Progress from './components/Progress';

const LandingLazy = lazy(()=>import('./components/LandingPage'));
const LoginLazy = lazy(()=>import('./components/LoginPage'));

export default () => {

    const [isSignedIn, setIsSignedIn] = useState(false);

    return (
        <BrowserRouter>
            <div className='global_container'>
                <Header isSignedIn={isSignedIn} onSignOut={()=>setIsSignedIn(false)}/>
                <Suspense fallback={<div><Progress /> </div>}>
                    <Routes>
                        <Route path='/auth/*' element={<div><LoginLazy onSignIn={()=>setIsSignedIn(true)} /> </div>} />
                        <Route path='/*' element={<div><LandingLazy onSignIn={()=>setIsSignedIn(true)} /><Footer /> </div>} />
                        <Route path='*' element={<h1>404 Not Found</h1>} />
                    </Routes>
                </Suspense>
            </div>
        </BrowserRouter>
    );
};