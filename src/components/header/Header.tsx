// React
import React, {Component} from "react";
import {Link} from "react-router-dom";

// Local
import './Header.css';

class Header extends Component {
    render() {
        return (
            <div className="button-group">
                <Link to="/">
                    <button>Home</button>
                </Link>
                <Link to="/download">
                    <button>Download link</button>
                </Link>
                <Link to="/token">
                    <button>JWT API Token</button>
                </Link>
                <Link to="/swagger">
                    <button>Documentation</button>
                </Link>
                <Link to="/login">
                    <button>Login</button>
                </Link>
            </div>
        )
    }
}

export default Header;
