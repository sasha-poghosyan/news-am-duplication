import React, { Component } from "react";
import './container.css';
import Bol from "../bol/bol";
import video from "./hayko.mp4";




export default class Container extends Component {

    render() {
        let arr = this.props.bols;
        let text = this.props.bols.text;

        return (
            <>

                <div className={'container'}>
                    <div className={'lrahos'}>
                        <ul>
                            <li>Իշխան Սաղաթելյանի մոտ կորոնավիրուս է հաստատվել. հետաձգվել է նրա հանդիպումը ՌԴ դեսպանի հետ</li>
                            <li>ՌԴ ԱԳՆ. Մոսկվան առաջարկներ է փոխանցել Երեւանին եւ Բաքվին սահմանազատման շուրջ բանակցությունների վերաբերյալ</li>
                            <li>Արժեր․ Էրդողանը՝ Ս-400-երի գնման եւ ԱՄՆ-ի հետ հարաբերությունների վատթարացման մասին</li>
                            <li>Հայտնի է Աբովյան փողոցում սպանության փորձ կատարած անձի ինքնությունը</li>
                            <li>Իրանցի պաշտոնյա․ դեպի Հայաստան իրանական բեռնատարների համար երթուղին չի փոխվել</li>
                            <li>Իրանցի պաշտոնյա․ դեպի Հայաստան իրանական բեռնատարների համար երթուղին չի փոխվել</li>
                            <li>Արժեր։ Ս-400-երի գնման ու ԱՄՆ-ի հետ հարաբերությունների վերաբերյալ նման կարծիք է Սոչիում  ՌԴ նախագահ Վլադիմիր Պուտինի</li>
                            <li>Պուտինի հետ հանդիպումից հետո հայտնել Թուրքիայի նախագահ Թայիփ Էրդողանը։</li>

                        </ul>
                    </div>

                    <video width="500" height="255" controls >
                        <source src={video} type="video/mp4" />
                    </video>

                    <div className={'seri'}>Երգիչ Հայկոյի հոգեհանգստի արարողությունը</div>
                    <div className={'red'}><a className={'paterazm'} href="https://www.youtube.com/watch?v=F_lTWjl9ePw" >Պատերազմ Արցախում </a> </div>
                    <div className={'blue'}><a className={'Telegram'} href="/"> NEWS.am-ը Telegram-ում</a></div>
                    <div className={'breackingnews'}>
                        <div className={'breaking'}><p>Breacking news</p></div>
                        <div className={'breack'}>
                            {
                                arr.map((el, i) => {
                                    if (el.activ == true) {
                                        return (
                                            <p className={'bolsText'}>{el.text}</p>
                                        )
                                    }

                                })
                            }


                        </div>
                        <div className={'keter'} style={{ top: -5 }}>
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
                            <div className={'imegtext'}><li>Ինչո՞ւ է լռում քաղավիացիայի կոմիտեն՝ ՀՀ տարածքով Բաքու-Նախիջեւան չվերթներ թույլատրելու հարցի վերաբերյալ </li></div>




                        </div>
                        <div className={'erku'}>
                            <div className={'erkusiverev'}>
                                <div className={'erkusiverevdzax'}>

                                    <li>Գլխավոր նորություններ</li>

                                </div>
                                <div className={'erkusiverevaj'}>
                                    <li>Ամենաընթերցված</li>
                                </div>
                                <div className={'erkusimejitext'}>

                                    <li>Հայաստանի օդային տարածքը չի վերահսկվում. Դավաճանությունն էլ ի՞նչ գույնի է լինում. Հակոբ Ճաղարյան</li>
                                    <li>Կրակոցներ՝ Ծաղկաձորում. կրակողը մինչ այդ հարվածել է և սեռական բնույթի հայհոյանքներ տվել. </li>
                                    <li>Ադրբեջանի համար Հայաստանի օդային տարածքի բացման մասին հաղորդագրությունները առաջին </li>
                                    <li>Ադրբեջանի համար Հայաստանի օդային տարածքի բացման մասին հաղորդագրությունները առաջին </li>
                                    <li>Ադրբեջանի համար Հայաստանի օդային տարածքի բացման մասին հաղորդագրությունները առաջին </li>

                                </div>

                            </div>
                        </div>
                        <div className={'ereq'}>

                            <video width='312' controls>
                                <source src='https://www.youtube.com/watch?v=WcsxuB6Wciwlist=RDWcsxuB6Wciwstart_radio=1'></source>
                            </video>




                            <div className={'ereqitakitext'}>
                                <li>
                                    Ինչո՞ւ է լռում քաղավիացիայի կոմիտեն՝ ՀՀ տարածքով Բաքու-Նախիջեւան չվերթներ թույլատրելու հարցի վերաբերյալ</li>
                                <li>
                                    Ինչո՞ւ է լռում քաղավիացիայի կոմիտեն՝ ՀՀ տարածքով Բաքու-Նախիջեւան չվերթներ թույլատրելու հարցի վերաբերյալ</li>
                                <li>
                                    Ինչո՞ւ է լռում քաղավիացիայի կոմիտեն՝ ՀՀ տարածքով Բաքու-Նախիջեւան չվերթներ թույլատրելու հարցի վերաբերյալ</li>
                            </div>


                        </div>


                    </div>

                </div>
            </>
        )
    }
}