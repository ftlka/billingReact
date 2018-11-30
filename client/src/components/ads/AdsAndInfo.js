import React, { Component } from 'react';
import './AdsAndInfo.css';
import Products from './Products/Products';

class AdsAndInfo extends Component {
    render() {
        return (
            <div className="Ads-And-Info">
                <header className="About-Client Text">О компании Индивидуальный предприниматель Щвецова Мария Валерьевна</header>
                <Products />
                <div className="Detailed-Info Text">
                    Испа́ния (исп. и галис. España), официально Короле́вство Испа́ния
                    (исп. и галис. Reino de España МФА [ˈreino ðe esˈpaɲa]) — суверенное государство на юго-западе
                    Европы и частично в Африке, член Европейского союза и НАТО. Испания занимает бо́льшую часть
                    (80 %) Пиренейского полуострова, а также Канарские и Балеарские острова, имеет общую площадь
                    504 782 км² (вместе с небольшими суверенными
                    территориями на африканском побережье, городами Сеута и Мелилья), являясь четвёртой по величине
                    страной в Европе (после России, Украины и Франции).
                </div>
                <div className="Social-Media">
                    <div className="Google"></div>
                    <div className="Vk"></div>
                    <div className="Facebook"></div>
                    <div className="Linkedin"></div>
                    <div className="Ok"></div>
                    <div className="Telegram"></div>
                    <div className="Twitter"></div>
                </div>
            </div>
        );
    }
}

export default AdsAndInfo;
