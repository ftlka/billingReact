import React, { Component } from 'react';
import './ClientInfo.css';
import MainInfo from './mainInfo/MainInfo';
import Image from './image/Image';

class ClientInfo extends Component {
  render() {
    return (
      <div className="ClientInfo">
        <MainInfo />
        <Image />
      </div>
    );
  }
}

export default ClientInfo;
