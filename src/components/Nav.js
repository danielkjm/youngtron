import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

class Nav extends Component {
  render() {
    return (
      <div className="navbar">
        <Link to="/">
          <img
            src="http://youngtron.com/wp-content/uploads/2015/06/youngtronlogo1.png"
            className="logo"
          />
        </Link>
        <div className="nav-items">
          <Link to="/about" className="link">
            About
          </Link>
          <div className="link">Services</div>
          <div className="link">Resources</div>
          <div className="link">Location</div>
        </div>
      </div>
    );
  }
}

export default Nav;
