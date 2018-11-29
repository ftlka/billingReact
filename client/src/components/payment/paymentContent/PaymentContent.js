import React, { Component } from 'react';
import './PaymentContent.css';

import PaymentOptions from '../PaymentOptions/PaymentOptions';
import PaymentWindow1 from './PaymentWindow1/PaymentWindow1';

class PaymentContent extends Component {
  render() {
    return (
      <div>
          <PaymentOptions />
          <PaymentWindow1 />
      </div>
    );
  }
}

export default PaymentContent;
