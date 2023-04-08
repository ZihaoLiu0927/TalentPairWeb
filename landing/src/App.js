import React, {useState, StrictMode } from 'react';
import { Router, Route, Routes } from 'react-router-dom';

import './css/style.css';
import SectionAbout from './components/SectionAbout';
import SectionIntro from './components/SectionIntro';


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
                <Route exact path="/intro" element={<div><SectionIntro/></div>} />
                <Route path="/" element={<div><SectionAbout /><SectionIntro /></div>} />
              </Routes>
            </Router>
        </div>
      </StrictMode>
    );
};