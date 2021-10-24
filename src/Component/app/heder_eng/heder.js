import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import './heder.css';
import { FaWifi } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaCloud } from "react-icons/fa";



export default class Heder_eng extends Component {
    render() {
        let month = null;
        let weekday = null;

        switch (this.props.weekday) {
            case 0: weekday = 'Sunday'; break;
            case 1: weekday = 'Monday'; break;
            case 2: weekday = 'Tuesday'; break;
            case 3: weekday = 'Wednesday'; break;
            case 4: weekday = 'Thursday'; break;
            case 5: weekday = 'Friday'; break;
            case 6: weekday = 'Saturday'; break;



            default: weekday = 'շաբաթ';
        }


        switch (this.props.month) {
            case 0: month = "January"; break;
            case 1: month = 'February'; break;
            case 2: month = 'March'; break;
            case 3: month = 'April'; break;
            case 4: month = 'May'; break;
            case 5: month = 'June'; break;
            case 6: month = 'July'; break;
            case 7: month = 'August'; break;
            case 8: month = 'September'; break;
            case 9: month = "October"; break;
            case 10: month = 'November'; break;
            case 11: month = 'December'; break;


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
                            <div style={{ backgroundColor: 'red' }} className={'eng'}> <NavLink style={{ textDecoration: 'none', color: 'white' }} to={'/Eng'}>Eng</NavLink> </div>
                            <div className={'rus'}><NavLink style={{ textDecoration: 'none' }} to={'/Rus'}>Рус</NavLink></div>
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
                        <div className={'exanak'}>Erevan C <FaCloud style={{ color: 'red' }} /></div>
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