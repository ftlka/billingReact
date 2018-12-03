import React, { Component } from 'react';
import './PaymentWindow2.css';

class PaymentWindow2 extends Component {
  render() {
    return (
      <div className="Payment-Window2">
        <header className="Payment-Header">Сформируйте платёжку и загрузите её в свой банк для подписи</header>
        <div className="Payment-Details-Container">
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
        </div>
        <button className="Default-Button-Styles Download-File-Button">Получить файл для интернет-банка</button>
        <div className="Clear-Form Link">Очистить форму</div>
      </div>
    );
  }
}

export default PaymentWindow2;