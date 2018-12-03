import React, { Component } from 'react';
import './AdsAndInfo.css';
import Product from './Product/Product';

class AdsAndInfo extends Component {
    render() {
        return (
            <div className="Ads-And-Info">
                <header className="About-Client Text">О компании Индивидуальный предприниматель Щвецова Мария Валерьевна</header>
                <div className="Product-Gallery">
                    <Product img='sugar.jpg' price='120руб' name='товар1' />
                    <Product img='socks.jpg' price='240руб' name='товар2товар2товар2товар2товар2товар2товар2товар2товар2товар2товар2товар2товар2товар2' />
                    <Product img='corn.jpg' price='60руб' name='товар3' />
                    <Product img='kittens.jpg' price='480руб' name='товар4' />
                    <Product img='kittens.jpg' price='480руб' name='товар4' />
                    <Product img='kittens.jpg' price='480руб' name='товар4' />
                    <Product img='kittens.jpg' price='480руб' name='товар4' />
                    <Product img='kittens.jpg' price='480руб' name='товар4' />
                    <Product img='kittens.jpg' price='480руб' name='товар4' />
                    <Product img='kittens.jpg' price='480руб' name='товар4' />
                    <Product img='kittens.jpg' price='480руб' name='товар4' />
                    <Product img='kittens.jpg' price='480руб' name='товар4' />
                    <Product img='kittens.jpg' price='480руб' name='товар4' />
                    <Product img='kittens.jpg' price='480руб' name='товар4' />
                    
                </div>
                <div className="Detailed-Info">
                    Испа́ния (исп. и галис. España), официально Короле́вство Испа́ния
                    (исп. и галис. Reino de España МФА [ˈreino ðe esˈpaɲa]) — суверенное государство на юго-западе
                    Европы и частично в Африке, член Европейского союза и НАТО. Испания занимает бо́льшую часть
                    (80 %) Пиренейского полуострова, а также Канарские и Балеарские острова, имеет общую площадь
                    504 782 км² (вместе с небольшими суверенными
                    территориями на африканском побережье, городами Сеута и Мелилья), являясь четвёртой по величине
                    страной в Европе (после России, Украины и Франции).
                </div>
                <div className="Show-All-Info Link">Показать всё</div>
                <div className="Social-Media">
                    <div className="Google Sprite"></div>
                    <div className="Vk Sprite"></div>
                    <div className="Facebook Sprite"></div>
                    <div className="Linkedin Sprite"></div>
                    <div className="Ok Sprite"></div>
                    <div className="Telegram Sprite"></div>
                    <div className="Twitter Sprite"></div>
                </div>
            </div>
        );
    }
}

export default AdsAndInfo;
