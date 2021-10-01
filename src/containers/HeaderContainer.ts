// React
import {connect} from "react-redux";

// Local
import {getToken} from "../actions/LoginActions";
import Header from "../components/header/Header";

const mapDispatchToProps = {
    getToken
}

export default connect(null, mapDispatchToProps)(Header);
