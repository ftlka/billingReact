import React, { Component } from 'react';
import './Image.css';
import pic from '../../../static/trump.jpg';

class Image extends Component {
  render() {
    return (
      <div className="Wrapper">
          <img className="Content" src={pic} alt="trump"/>
      </div>
    );
  }
}

export default Image;
