import React, { Component } from 'react';
import './Payment.css';

import PaymentTypes from './paymentTypes/PaymentTypes';
import PaymentContent from './paymentContent/PaymentContent';
import PaymentRequest from './PaymentRequest/PaymentRequest';

class Payment extends Component {
  render() {
    return (
      <div className="Payment">
        <PaymentTypes />
        <PaymentRequest />
        {/* <PaymentContent /> */}
      </div>
    );
  }
}

export default Payment;
