import React, {useState, StrictMode } from 'react';
import { Router, Route, Routes } from 'react-router-dom';

import './css/style.css';
import ApplicantDemo from './components/ApplicantDemo';


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
                <Route path="/" element={<div><ApplicantDemo /><ApplicantDemo /></div>} />
              </Routes>
            </Router>
        </div>
      </StrictMode>
    );
};