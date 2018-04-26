import React, { Component } from 'react';
import { Header } from './components/Header';
import { AboutMeContent } from './components/AboutMeContent';
import { Footer } from './components/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <AboutMeContent />
        <Footer />
      </div>
    );
  }
}

export default App;
