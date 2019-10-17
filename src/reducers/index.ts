import { combineReducers } from "redux";
import { staffListReducer } from './staff-list-reducer'
import { sponsorsListReducer } from './sponsors-list-reducer'


export const reducers = {
    staffListReducer,
    sponsorsListReducer
};

export const rootReducer = combineReducers(reducers);