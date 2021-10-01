import * as actionTypes from '../constants/ActionTypes';

const initialState = {
    token: ""
};

export default function login(state: object = initialState, action: any){
    switch (action.type){
        case actionTypes.GET_TOKEN:
            return {
                ...state,
                token: action.token || "fakeToken"
            };
        default:
            return state
    }
}
