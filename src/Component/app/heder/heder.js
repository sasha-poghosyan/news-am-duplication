import React,{Component} from "react";
import { NavLink } from "react-router-dom";
import { FaWifi } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaCloud } from "react-icons/fa";

import './heder.css';





export default class Heder extends Component{
    render(){
            let month = null;
            let weekday = null;
            let day = null;

            switch(this.props.weekday){
                case 0: weekday = 'Կիրակի';break;
                case 1: weekday = 'Երկուշաբթի';break;
                case 2: weekday = 'Երեքշաբթի';break;
                case 3: weekday = 'Չորեքշաբթի';break;
                case 4: weekday = 'Հինգշաբթի';break;
                case 5: weekday = 'ՈԻրբաթ';break;
                case 6: weekday = 'Շաբաթ';break;
                


                default: weekday = 'շաբաթ';
            }
            

            switch(this.props.month){
                case 0: month = "Հունվար";break;
                case 1: month = 'Փետրվար';break;
                case 2: month = 'Մարտ';break;
                case 3: month = 'Ապրել';break;
                case 4: month = 'Մայիս';break;
                case 5: month = 'Հունիս';break;
                case 6: month = 'Հուլիս';break;
                case 7: month = 'Օգօստոս';break;
                case 8: month = 'Սեպտեմբեր';break;
                case 9: month = "Հոկտեմբեր";break;
                case 10: month = 'նոյեմբեր';break;
                case 11: month = 'Դեկտեմբեր';break;
                
                
                default: month = "amis";
            }
           


        return(
            <>
            <div  className={'heder'}>
               
                    <div className={'logo'}><a class="logo" href="https://news.am/arm/"></a>
                        
                    
                    </div>
                    
                    
                    <div className={'lezu'}>
                        <ul>
                            <div style={{backgroundColor:'red'}} className={'hay'}><NavLink  style={{textDecoration:'none',color:'white'}}  to={'/Arm'}>Հայ</NavLink></div>
                            <div  className={'eng'}><NavLink style={{textDecoration:'none'}} to={'/Eng'}>Eng</NavLink></div>
                            <div  className={'rus'}><NavLink style={{textDecoration:'none'}} to={'/Rus'}>Рус</NavLink></div>
                        </ul>
                        </div>

                        <div className ={'calendar'}>

                       

                            <ul> 
                            <li>{weekday}</li><li>{month}</li><li className={'tiv'}>{this.props.day}</li>
                         
                            </ul>

                        </div>
                      

                        <div className={'cheng'}>
                           
                            <div>USD<br/> 480.82</div>
                            <div>EUR<br/> 564.15</div>
                            <div>RUB<br/> 6.6</div>
                        
                                                       
                        </div>

                        
                        <div className={'xarn'}>
                        <div className={'exanak'}>Երևան C  <FaCloud style={{color:'red'}}/></div>
                            <div className={'logos'}>
                                <div className={'wifi'}><FaWifi /></div>
                                <div className={'twiter'}><FaTwitter/></div>
                                <div className={'f'}><FaFacebookF/></div>
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
                            <input  />
                            <div className={'search1'}></div>
                           
                            </div>
                            
                            
                            
                            
                        </div>
                    
                    
                    
                
            </div>
            </>
        )
    }
}