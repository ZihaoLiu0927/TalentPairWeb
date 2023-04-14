import React, { useState, StrictMode } from 'react';
import { Router, Route, Routes } from 'react-router-dom';
import "./tailwind/style.css";

import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

export default ( props ) => {

  const { history, location, onSignIn } = props;
  const [isolationLocation, setIsolationLocation] = useState(history.location);

  if (location === undefined) {
    history.listen( ({ location }) => {
      setIsolationLocation(location);
    });
  }

    return (
      <StrictMode>
        <div className='auth-container'>
            <Router location={location || isolationLocation} navigator={history}>
              <Routes>
                <Route path="/auth/signup" element={<SignUp onSignIn={onSignIn} />} />
                <Route path="/auth/signin" element={<SignIn onSignIn={onSignIn} />} />
              </Routes>
            </Router>
        </div>
      </StrictMode>
    );
};