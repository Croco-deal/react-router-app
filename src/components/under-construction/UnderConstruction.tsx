import React, {Component} from "react";
import logo from "../../logo.svg";
import {MESSAGES} from "../../constants/Messages";

class Download extends Component {
    render() {
        return (
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p> {MESSAGES.UNDER_CONSTRUCTION} </p>
            </div>
        )
    }
}

export default Download;
