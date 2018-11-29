import React, { Component } from 'react';
import './PaymentTypes.css';

class PaymentTypes extends Component {
  render() {
    return (
      <div className="PaymentTypesContainer Header">
        <div className="MakePayment PaymentType">Заплатить</div>
        <div className="GetPayment PaymentType">Запросить платёж</div>
      </div>
    );
  }
}

export default PaymentTypes;
