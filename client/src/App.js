import React, { Component } from 'react';
import './App.css';

import ClientInfo from './components/clientInfo/ClientInfo';
import Payment from './components/payment/Payment';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ClientInfo />
        <Payment />
      </div>
    );
  }
}

export default App;
