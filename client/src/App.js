import React, { Component } from 'react';
import './App.css';

import ClientInfo from './components/clientInfo/ClientInfo';
import Payment from './components/payment/Payment';
import AdsAndInfo from './components/ads/AdsAndInfo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <link href="https://fonts.googleapis.com/css?family=Alegreya+Sans" rel="stylesheet" />
        <ClientInfo />
        <Payment />
        <AdsAndInfo />
      </div>
    );
  }
}

export default App;
