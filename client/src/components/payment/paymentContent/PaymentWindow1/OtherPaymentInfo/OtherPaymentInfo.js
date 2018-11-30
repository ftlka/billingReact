import React, { Component } from 'react';
import './OtherPaymentInfo.css';


class OtherPaymentInfo extends Component {
    render() {
        return (
            <div className="OtherPaymentInfo">
                <div className="Detail Sum">
                    <div className="Detail-Name Flex-Row-Elem">Сумма</div>
                    <input className="Detail-Value Flex-Row-Elem Form" placeholder="от 1.000 до 75.000₽" required />
                </div>
                <div className="Detail Comment">
                    <div className="Detail-Name Flex-Row-Elem">Комментарий</div>
                    <input className="Detail-Value Flex-Row-Elem Form" placeholder="До 150 символов" />
                </div>
                <div className="Detail Mail">
                    <div className="Detail-Name Flex-Row-Elem">Ваша эл.почта</div>
                    <input className="Detail-Value Flex-Row-Elem Form" type="email"
                        placeholder="Для квитанций об оплате" />
                </div>
                <button className="Pay-Button Default-Button-Styles">Заплатить</button>
            </div>
        );
    }
}

export default OtherPaymentInfo;