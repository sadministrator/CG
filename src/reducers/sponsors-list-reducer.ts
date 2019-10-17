import { Reducer } from 'redux';
import { sponsorsListType } from '../types/sponsors-list-types';
import { sponsorsListConstants } from '../constants/sponsors-list-constants';

export interface SponsorsListState {
    loading: boolean;
    sponsors: Array<any>
    error: any;
}

const initialState: SponsorsListState = {
    loading: false,
    sponsors: {} as Array<any>,
    error: undefined
}

export const sponsorsListReducer: Reducer<SponsorsListState, sponsorsListType> = (state = initialState, action: sponsorsListType) => {
    switch (action.type) {
        case sponsorsListConstants.SPONSORS_LIST_BEGIN:
            return {
                ...state,
                loading: true,
                error: undefined
            }
        case sponsorsListConstants.SPONSORS_LIST_SUCCESS:
            return {
                ...state,
                loading: false,
                sponsors: action.data
            }
        case sponsorsListConstants.SPONSORS_LIST_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        default: 
            return initialState;
    }
}