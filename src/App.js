import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Navbar } from './components/Navbar';
import { AboutMeContent } from './components/AboutMeContent';
import { CVContent } from './components/CVContent';
import { ProjectsContent } from './components/ProjectsContent';
import { HobbyContent } from './components/HobbyContent';
import { ContactContent } from './components/ContactContent';
import { Footer } from './components/Footer';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Navbar />
          <Route exact path="/" component={AboutMeContent}/>
          <Route path="/curriculum-vitae" component={CVContent}/>
          <Route path="/wykonane-projekty" component={ProjectsContent}/>
          <Route path="/hobby" component={HobbyContent}/>
          <Route path="/kontakt" component={ContactContent}/>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
