import React, { useState, StrictMode } from 'react';
import { Router, Route, Routes } from 'react-router-dom';
import "./tailwind/style.css";

import SignIn from './components/Signin';
import SignUp from './components/Signup';

export default ( props ) => {

  const { history, location } = props;
  const [isolationLocation, setIsolationLocation] = useState(history.location);

  if (location === undefined) {
    history.listen( ({ location }) => {
      setIsolationLocation(location);
    });
  }

    return (
      <StrictMode>
        <div>
            <Router location={location || isolationLocation} navigator={history}>
              <Routes>
                <Route path="/auth/signup" element={<SignUp />} />
                <Route path="/auth/signin" element={<SignIn />} />
              </Routes>
            </Router>
        </div>
      </StrictMode>
    );
};