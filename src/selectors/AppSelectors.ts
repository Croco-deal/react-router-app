import {IRootState} from "../models/AppModels";

export const selectToken = (state: IRootState) => state.login.token;
