
import React, { Component } from "react";


export default class Bol extends Component {

    render() {
        let text = this.props.text;
        let el = this.props.el;
        let i = this.props.i;
        let backgr = "one";
        let vichak = 'one_text';

        if (el.activ == true) {
            backgr = "one_true";
        }

        return (

            <>



                <div key={i} className={backgr} onClick={() => { this.props.changActiv(i) }} ></div>





            </>
        )
    }
}


