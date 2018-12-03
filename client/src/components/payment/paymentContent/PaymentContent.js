import React, { Component } from 'react';
import './PaymentContent.css';

import PaymentOptions from '../PaymentOptions/PaymentOptions';
import PaymentWindow1 from './PaymentWindow1/PaymentWindow1';
import PaymentWindow2 from './PaymentWindow2/PaymentWindow2';

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
