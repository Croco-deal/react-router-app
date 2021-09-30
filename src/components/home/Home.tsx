// React
import React, {Component} from "react";

// Local
import logo from "../../logo.svg"

class Home extends Component {
    render() {
        return (
            <div>
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        SCDS Unified Portal ...
                    </p>
                </div>
            </div>
        );
    }
}

export default Home;
