import React, { Component } from "react";
import './app.css';
import Heder from "./heder/heder";
import Heder_eng from "./heder_eng/heder";
import Heder_rus from "./heder_rus/heder";
import Container from "./container/container";
import Container_eng from "./container_eng/container";
import { Route } from "react-router";
import { BrowserRouter, NavLink, Switch } from "react-router-dom";
import Container_rus from "./container_rus/container";
import { MenuList } from "@material-ui/core";


export default class App extends Component {

    // state = {
    //     keter:[
    //         {name:'one', activ: true},
    //         {name:'two', activ: false},
    //         {name:'three', activ: false},
    //         {name:'four', activ: false},
    //     ]
    // }

    // state = {
    //     newTime : null,
    // }

    state = {
        day: null,
        month: null,
        weekday: null,

        bols: [
            { activ: true, text: 'Հայաստանում հաստատվել է կորոնավիրուսով վարակվելու 2603 նոր դեպք. մահացել է 37 քաղաքացի' },
            { activ: false, text: 'ՄԱԿ գլխավոր քարտուղարը ԿԱՀ-ում բոլոր կողմերին կոչ է արել աջակցել հրադադարին' },
            { activ: false, text: 'Առավոտյան ադրբեջանական ԶՈՒ ստորաբաժանումները կրակ են բացել ՊԲ սանիտարական մեքենայի ուղղությամբ․ ՊԲ' },
            { activ: false, text: 'Ադրբեջանական զինված ուժերը կրակ են բացել Արցախի ՊԲ մարտական հենակետի ուղղությամբ, կա 6 վիրավոր. Արցախի ՊԲ' },
        ],
    }

    changActiv = (i) => {
        this.state.bols.forEach((el) => {
            el.activ = false;
        })

        this.state.bols[i].activ = true;

        this.setState({});
    }

    componentDidMount() {
        let newDay;
        let a;
        a = new Date();
        this.state.weekday = a.getDay();
        this.state.day = a.getUTCDate();
        this.state.month = a.getMonth();
        this.setState({});
    }

    // newDay = {
    //     day : a.getDay(), 
    //     month : a.getMonth(),
    // };

    render() {
        //     let newTime;
        //     let d;

        // setInterval(() => {
        //     d =  new Date();
        //     newTime = d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();
        //  this.state.newTime = newTime;
        //  this.setState({});
        // }, 1000);   

        return (
            <>
                <MenuList />

                {/* <h1>{this.state.newTime}</h1> */}

                <BrowserRouter>

                    <Switch>
                        <Route path={'/Arm'}>
                            <Heder weekday={this.state.weekday} month={this.state.month} day={this.state.day} />
                        </Route>

                        <Route path={'/Eng'}>
                            <Heder_eng weekday={this.state.weekday} month={this.state.month} day={this.state.day} />

                        </Route>
                        <Route path={'/Rus'}>< Heder_rus weekday={this.state.weekday} month={this.state.month} day={this.state.day} />
                        </Route>
                        <Route path={'/'}> <Heder weekday={this.state.weekday} month={this.state.month} day={this.state.day} />

                        </Route>
                    </Switch>

                    <Switch>
                        <Route path={'/Eng'} ><Container_eng bols={this.state.bols} changActiv={this.changActiv} /></Route>
                        <Route path={'/Arm'}> <Container bols={this.state.bols} text={this.state.bols.text} changActiv={this.changActiv} /> </Route>
                        <Route path={'/Rus'}><Container_rus bols={this.state.bols} changActiv={this.changActiv} /></Route>
                        <Route path={'/'}>  <Container bols={this.state.bols} changActiv={this.changActiv} /> </Route>
                    </Switch>

                </BrowserRouter>
            </>
        )
    }
}