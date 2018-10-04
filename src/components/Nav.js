import React, { Component } from 'react';
import '../App.css';

class Nav extends Component {
  render() {
    return (
      <div className="navbar">
        <img
          src="http://youngtron.com/wp-content/uploads/2015/06/youngtronlogo1.png"
          className="logo"
        />
        <div className="nav-items">
          <div>About</div>
          <div>Services</div>
          <div>Resources</div>
          <div>Location</div>
        </div>
      </div>
    );
  }
}

export default Nav;
