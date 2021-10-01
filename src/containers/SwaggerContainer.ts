// React
import { connect } from "react-redux";

// Local
import {selectToken} from "../selectors/AppSelectors";
import Swagger from "../components/swagger/Swagger";
import {IRootState} from "../models/AppModels";

const mapStateToProps = (state: IRootState) => {
    return {
        token: selectToken(state)
    }
}

export default connect(mapStateToProps)(Swagger);
