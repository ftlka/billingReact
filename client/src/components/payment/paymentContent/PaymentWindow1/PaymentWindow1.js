import React, { Component } from 'react';
import './PaymentWindow1.css';

import CreditCard from './CreditCard/CreditCard';
import OtherPaymentInfo from './OtherPaymentInfo/OtherPaymentInfo';

class PaymentWindow1 extends Component {
  render() {
    return (
      <div className="PaymentWindow1">
        <CreditCard />
        <OtherPaymentInfo />
      </div>
    );
  }
}

export default PaymentWindow1;