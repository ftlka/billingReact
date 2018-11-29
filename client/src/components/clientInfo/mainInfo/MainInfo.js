import React, { Component } from 'react';
import './MainInfo.css';

class MainInfo extends Component {
  render() {
    return (
      <div className="InfoContainer">
          <div className="Name Header">
            <div className="Position Flex-Row-Elem Text">Индивидуальный предприниматель</div>
            <div className="FullName Flex-Row-Elem Text">Швецовааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааа Мария Валерьевна</div>
          </div>
          <div className="Links">
            <div className="Phone Flex-Row-Elem">+79193977777</div>
            <div className="Website Link Flex-Row-Elem Text">www.mary.com</div>
            <div className="Email Link Flex-Row-Elem Text">mary@tochka.com</div>
          </div>
          <div className="CompanyFullInfo Link Text">Информация о компании</div>
          <div className="ShowAccountDetails Link Text">Показать реквизиты</div>
      </div>
    );
  }
}

export default MainInfo;
