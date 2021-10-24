import React, { Component } from "react";
import './container.css';
import Bol from "../bol/bol";


export default class Container_rus extends Component {

    render() {
        let arr = this.props.bols;
        return (
            <>

                <div className={'container'}>
                    <div className={'lrahos'}>
                        <ul>
                            <li> У Ишхана Сагателяна диагностировали коронавирус. Его встреча с послом России отложена. </li>
                            <li> МИД России. Москва направила Еревану и Баку предложения по переговорам о демаркации. </li>
                            <li> Ценности ․ Эрдоган о покупке С-400 и об ухудшении отношений с США </li>
                            <li> Личность человека, пытавшегося убить на улице Абовяна, известна </li>
                            <li> иранский чиновник ․ Маршрут движения иранских грузовиков в Армению не изменился. </li>
                            <li> иранский чиновник ․ Маршрут движения иранских грузовиков в Армению не изменился. </li>
                            <li> Ценности. Таково мнение президента России Владимира Путина в Сочи о закупке С-400 и отношениях с США. </li>
                            <li> Об этом заявил президент Турции Тайип Эрдоган после</li>
                        </ul>
                    </div>
                    <video width="500" height="250" controls >
                        <source src="./video/erg.webm" type="video/mp4" />
                    </video>
                    <div className={'seri'}>Похороны певицы Хайко</div>
                    <div className={'red'}><a className={'paterazm'} href="https://www.youtube.com/watch?v=F_lTWjl9ePw" >Война в Арцахе</a></div>
                    <div className={'blue'}><a className={'Telegram'} href=" " >NEWS.am в Telegram</a></div>
                    <div className={'breackingnews'}>Breaking news
                        <div className={'keter'}>
                            {
                                arr.map((el, i) => {
                                    return (
                                        <Bol el={el} i={i} changActiv={this.props.changActiv} />
                                    )
                                })
                            }
                        </div>


                    </div>

                    <div className={'nerqevimec'}>

                        <div className={'mek'}>
                            <div className={'imeg'}></div>
                            <div className={'imegtext'}><li>Почему Комитет гражданской авиации молчит по вопросу о разрешении полетов Баку-Нахичевань через Армению?</li></div>




                        </div>
                        <div className={'erku'}>
                            <div className={'erkusiverev'}>
                                <div className={'erkusiverevdzax'}>

                                    <li>Общие новости</li>

                                </div>
                                <div className={'erkusiverevaj'}>
                                    <li>Наиболее читаемые</li>
                                </div>
                                <div className={'erkusimejitext'}>

                                    <li> Воздушное пространство Армении не контролируется. Какого цвета предательство? Акоп Чагарян </li>
                                    <li> Стрельба в Цахкадзоре. Стрелок ударил его раньше и нанес оскорбления сексуального характера. </li>
                                    <li> Первые объявления об открытии воздушного пространства Армении для Азербайджана </li>
                                    <li> Первые объявления об открытии воздушного пространства Армении для Азербайджана </li>
                                    <li> Первые объявления об открытии воздушного пространства Армении для Азербайджана </li>

                                </div>

                            </div>
                        </div>
                        <div className={'ereq'}>

                            <video width="312" controls >
                                <source src='./video/erg.webm' type="video/mp4" ></source>
                            </video>


                            <div className={'ereqitakitext'}>
                                <li>
                                    Почему Комитет гражданской авиации молчит по вопросу о разрешении полетов Баку-Нахичевань через Армению? </li>
                                <li>
                                    Почему Комитет гражданской авиации молчит по вопросу о разрешении полетов Баку-Нахичевань через Армению? </li>
                                <li>
                                    Почему Комитет гражданской авиации молчит по вопросу о разрешении полетов Баку-Нахичевань через Армению? </li>
                            </div>


                        </div>


                    </div>

                </div>



            </>
        )
    }
}