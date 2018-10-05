import React, { Component } from 'react';
import '../App.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Nav from './Nav.js';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Carousel>
          <div>
            <img className="carousel-img" />
          </div>
          <div>
            <img className="carousel-img" />
          </div>
          <div>
            <img className="carousel-img" />
          </div>
        </Carousel>
      </div>
    );
  }
}
