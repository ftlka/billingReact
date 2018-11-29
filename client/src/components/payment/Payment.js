import React, { Component } from 'react';
import './Payment.css';

import PaymentTypes from './paymentTypes/PaymentTypes';
import PaymentContent from './paymentContent/PaymentContent';

class Payment extends Component {
  render() {
    return (
      <div className="Payment">
        <PaymentTypes />
        <PaymentContent />
      </div>
    );
  }
}

export default Payment;
