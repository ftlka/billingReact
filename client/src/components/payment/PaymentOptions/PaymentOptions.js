import React, { Component } from 'react';
import './PaymentOptions.css';

import icon1 from '../../../static/credit-card.svg';
import icon2 from '../../../static/devices.svg';

class PaymentOptions extends Component {
    render() {
        return (
            <div className="PaymentOptions">
                <div className="FirstOption PaymentOption Flex-Row-Elem">
                    <img src={icon1} alt="credit card" className="Icon" />
                    <div className="Text Payment-Option-Text">С карты любого банка</div>
                </div>
                <div className="SecondOption PaymentOption Flex-Row-Elem">
                    <img src={icon2} alt="computer and phone" className="Icon" />
                    <div className="Text Payment-Option-Text">Из своего интернет-банка</div>
                </div>
            </div>
        );
    }
}

export default PaymentOptions;
