/**
 * Découpage de l'ensemble des reducers selon les parties de l'application qu'ils concernent
 */
import {combineReducers} from 'redux';
import loginReducers from "./LoginReducers";

const rootReducer = combineReducers({
    login: loginReducers,
});

export default rootReducer;
