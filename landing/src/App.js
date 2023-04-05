import React, { StrictMode } from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import './css/style.css';
import SectionAbout from './components/SectionAbout';
import SectionIntro from './components/SectionIntro';


export default ( { history } ) => {

    return (
      <StrictMode>
        <div>
            <Router history={history}>
              <Switch>
                <Route exact path="/intro" render={()=><div><SectionIntro/></div>} />
                <Route path="/" render={()=><div><SectionAbout /><SectionIntro /></div>} />
              </Switch>
            </Router>
        </div>
      </StrictMode>
    );
};