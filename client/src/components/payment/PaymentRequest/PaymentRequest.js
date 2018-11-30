import React, { Component } from 'react';
import './PaymentRequest.css';

class PaymentRequest extends Component {
    render() {
        return (
            <div className="PaymentRequest">
                <div className="Payment-Hint">
                    Создайте платёжку, а Индивидуальный предприниматель Швецова Мария Валерьевна подпишет её у себя в интернет-банке
                </div>
                <div className="Payment-Details">
                    <div className="Payment-Detail From">
                        <div className="Detail-Name">От кого</div>
                        <input className="Detail-Value" placeholder="ИНН или название платильщика" />
                    </div>
                    <div className="Payment-Detail BIK">
                        <div className="Detail-Name">БИК</div>
                        <input className="Detail-Value" placeholder="БИК" />
                    </div>
                    <div className="Payment-Detail Account-Number">
                        <div className="Detail-Name">Номер счёта</div>
                        <input className="Detail-Value" placeholder="Номер счёта" />
                    </div>
                    <div className="Payment-Detail NDS-Type">
                        <div className="Detail-Name">НДС</div>
                        <div className="Detail-Values">
                            <button className="NDS-18 NDS-Button">НДС 18%</button>
                            <button className="NDS-10 NDS-Button">НДС 10%</button>
                            <button className="No-NDS NDS-Button">Без НДС</button>
                        </div>
                    </div>
                    <div className="Payment-Detail Amount">
                        <div className="Detail-Name">Сколько</div>
                        <input className="Detail-Value" />
                    </div>
                    <div className="Payment-Detail Phone-Number">
                        <div className="Detail-Name">Номер телефона</div>
                        <div className="Phone-Number">
                            +7<input className="Detail-Value Phone-Value" type="tel"
                                maxLength="10" minLength="10" pattern="[0-9]{10}" />
                            <br />
                            <div className="Phone-Warning Link">Оставляя телефон, вы соглашаетесь на обработку персональных данных</div>
                        </div>
                    </div>
                    <div className="Payment-Detail Email">
                        <div className="Detail-Name">Электронная почта</div>
                        <input className="Detail-Value" type="email"
                            placeholder="Для уведомлений об оплате" />
                    </div>
                </div>
                <button className="Default-Button-Styles Create-Payment">Создать платёж</button>
                <div className="Clear-Form Link">Очистить форму</div>
            </div>
        );
    }
}

export default PaymentRequest;
