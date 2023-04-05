import React, { StrictMode, Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import "./tailwind/style.css";

import SignIn from './components/Signin';
import SignUp from './components/Signup';

export default ( { history } ) => {

    return (
      <StrictMode>
        <div>
            <Router history={history}>
              <Switch>
                <Route exact path="/auth/signup" render={()=><SignUp />} />
                <Route path="/auth/signin" render={()=><SignIn />} />
              </Switch>
            </Router>
        </div>
      </StrictMode>
    );
};