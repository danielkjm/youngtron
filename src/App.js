import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home.js';
import About from './components/About.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" component={Home} />
        </div>
      </Router>
    );
  }
}

export default App;
