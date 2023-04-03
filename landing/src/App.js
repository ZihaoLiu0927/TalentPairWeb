import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/styles';

import './css/style.css';
import './components/SectionAbout';
import SectionAbout from './components/SectionAbout';
import SectionIntro from './components/SectionIntro';

const generateClassName = createGenerateClassName({
  productionPrefix: 'landing',
});

class App extends Component {
  render() {
    return (
      <div>
        <StylesProvider generateClassName={generateClassName}>
          <BrowserRouter>
            <SectionAbout />
            <SectionIntro />
          </BrowserRouter>
        </StylesProvider>
      </div>
      );
    }
}

export default App;