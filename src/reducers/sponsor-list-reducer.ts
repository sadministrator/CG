import { Reducer } from 'redux';
import { sponsorListType } from '../types/sponsor-list-types';
import { sponsorListConstants } from '../constants/sponsor-list-constants';

export interface SponsorListState {
    aloading: boolean;
    sponsor: Array<any>
    aerror: any;
}

const initialState: SponsorListState = {
    aloading: false,
    sponsor: {} as Array<any>,
    aerror: undefined
}

export const sponsorListReducer: Reducer<SponsorListState, sponsorListType> = (state = initialState, action: sponsorListType) => {
    switch (action.type) {
        case sponsorListConstants.SPONSOR_LIST_BEGIN:
            return {
                ...state,
                aloading: true,
                aerror: undefined
            }
        case sponsorListConstants.SPONSOR_LIST_SUCCESS:
            return {
                ...state,
                aloading: false,
                sponsor: action.data
            }
        case sponsorListConstants.SPONSOR_LIST_ERROR:
            return {
                ...state,
                aloading: false,
                aerror: action.error
            }
        default: 
            return initialState;
    }
}