import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import './heder.css';
import { FaWifi } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaCloud } from "react-icons/fa";



export default class Heder_rus extends Component {


    render() {

        let month = null;
        let weekday = null;

        switch (this.props.weekday) {
            case 0: weekday = 'Воскресенье'; break;
            case 1: weekday = 'Понедельник'; break;
            case 2: weekday = 'Вторник'; break;
            case 3: weekday = 'Среда'; break;
            case 4: weekday = 'Четверг'; break;
            case 5: weekday = 'Пятница'; break;
            case 6: weekday = 'Суббота'; break;



            default: weekday = 'շաբաթ';
        }


        switch (this.props.month) {
            case 0: month = "Январь"; break;
            case 1: month = 'Февраль'; break;
            case 2: month = 'Март'; break;
            case 3: month = 'Апрель'; break;
            case 4: month = 'Май'; break;
            case 5: month = 'Июнь'; break;
            case 6: month = 'Июль'; break;
            case 7: month = 'Август'; break;
            case 8: month = 'Сентябрь'; break;
            case 9: month = "Октябрь"; break;
            case 10: month = 'Ноябрь'; break;
            case 11: month = 'Декабрь'; break;


            default: month = "amis";
        }
        return (
            <>
                <div className={'heder'}>

                    <div className={'logo'}><a class="logo" href="https://news.am/arm/"></a>


                    </div>


                    <div className={'lezu'}>
                        <ul>
                            <div className={'hay'}><NavLink style={{ textDecoration: 'none' }} to={'/Arm'}>Հայ</NavLink></div>
                            <div className={'eng'}> <NavLink style={{ textDecoration: 'none' }} to={'/Eng'}>Eng</NavLink> </div>
                            <div style={{ backgroundColor: 'red' }} className={'rus'}><NavLink style={{ textDecoration: 'none', color: 'white' }} to={'/Rus'}>Рус</NavLink></div>
                        </ul>
                    </div>

                    <div className={'calendar'}>

                        <ul>
                            <li>{weekday}</li><li>{month}</li><li className={'tiv'}>{this.props.day}</li>
                        </ul>

                    </div>


                    <div className={'cheng'}>

                        <div>USD<br /> 480.82</div>
                        <div>EUR<br /> 564.15</div>
                        <div>RUB<br /> 6.6</div>


                    </div>


                    <div className={'xarn'}>
                        <div className={'exanak'}>Ереван C <FaCloud style={{ color: 'red' }} /> </div>
                        <div className={'logos'}>
                            <div className={'wifi'}><FaWifi /></div>
                            <div className={'twiter'}><FaTwitter /></div>
                            <div className={'f'}><FaFacebookF /></div>
                            <div className={'me'}>me</div>
                        </div>
                    </div>
                    <div className={'navbar'}>
                        <div className={'news'}>News</div>
                        <div className={'sport'}>Sport</div>
                        <div className={'style'}>Style</div>
                        <div className={'medicine'}>Medicine</div>
                        <div className={'video'}>Video</div>
                        <div className={'newsam'}>NEWS.am TV</div>
                        <div className={'reviews'}>Reviews</div>
                        <div className={'photo'}>Photo</div>
                        <div className={'vakancies'}>Vakancies</div>
                        <div className={'input'}>
                            <input />
                            <div className={'search1'}></div>

                        </div>




                    </div>




                </div>
            </>
        )
    }
}