import React, {useState, StrictMode } from 'react';
import { Router, Route, Routes } from 'react-router-dom';

import './css/style.css';
import RecruiterDemo from './components/RecruiterDemo';


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
                <Route path="/recruiter" element={<div><RecruiterDemo /><RecruiterDemo /></div>} />
              </Routes>
            </Router>
        </div>
      </StrictMode>
    );
};