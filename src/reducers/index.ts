import { combineReducers } from "redux";
import { staffListReducer } from './staff-list-reducer'
import { sponsorListReducer } from './sponsor-list-reducer'


export const reducers = {
    staffListReducer,
    sponsorListReducer
};

export const rootReducer = combineReducers(reducers);