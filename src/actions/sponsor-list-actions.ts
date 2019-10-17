import { getSponsor } from '../api/providers/sponsor';
import { Dispatch } from 'redux';
import * as types from '../types/sponsor-list-types';
import { sponsorListConstants } from '../constants/sponsor-list-constants';

const getSponsorBegin = (): types.IActionSponsorListBegin => {
    return {
        type: sponsorListConstants.SPONSOR_LIST_BEGIN
    }
}

const getSponsorSuccess = (sponsorData: Array<any>): types.IActionSponsorListlSuccess => {
    return {
        type: sponsorListConstants.SPONSOR_LIST_SUCCESS,
        data: sponsorData
    }
}

const getSponsorError = (error: any): types.IActionSponsorListError => {
    return {
        type: sponsorListConstants.SPONSOR_LIST_ERROR,
        error: error
    }
}

export const getSponsorAction = (search?: string) =>
    (dispatch: Dispatch) => {
        dispatch(getSponsorBegin());
        getSponsor.getAllSponsor(search)
            .then(response => {
                dispatch(getSponsorSuccess(response.data));
            })
            .catch((err) => {
                dispatch(getSponsorError(err));
            });
    }

