import React, { Component } from 'react';
import './css/style.css';

import './components/SectionAbout';
import SectionAbout from './components/SectionAbout';
import SectionIntro from './components/SectionIntro';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <SectionAbout />
          <SectionIntro />
        </BrowserRouter>
      );
    }
}

export default App;