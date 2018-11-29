import React, { Component } from 'react';
import './CreditCard.css';
import pic from '../../../../../static/cards-logos.png';


class CreditCard extends Component {
    render() {
        return (
            <div className="CreditCard">
                <img className="Cards-Logos" src={pic} alt="visa/mastercard logos" />
                <form>
                    <input type="text" className="Card-Number Card-Form"
                        pattern="[0-9]{16}"
                        name="card-number" placeholder="Номер карты" required />
                    <input type="text" className="Card-Exp Card-Form"
                        pattern="(0[1-9]|1[0-2])\/(1[8-9]|2[0-9]|3[0-7])"
                        name="card-expiration" placeholder="ММ/ГГ" required />
                    <input type="text" className="Card-CVC Card-Form"
                        pattern="[0-9]{3}"
                        name="card-cvc" placeholder="CVC" required />
                </form>
            </div>
        );
    }
}

export default CreditCard;