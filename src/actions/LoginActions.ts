// Local
import * as actionTypes from "../constants/ActionTypes";
import { AppDispatch } from "../store/AppStore";

export function getToken() {
    const tokenAction: any = {
        type: actionTypes.GET_TOKEN,
    }

    return simulateHttpRequest(tokenAction)
}

export function simulateHttpRequest(action: any) {
   return (dispatch: AppDispatch) => {
        setTimeout(() => {
            dispatch(action)
        }, 5000)
    }
}
