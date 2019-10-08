import { exampleReducer } from './example-reducer';
import { combineReducers } from "redux";

export const reducers = {
    exampleReducer
};

export const rootReducer = combineReducers(reducers);