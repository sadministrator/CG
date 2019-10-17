import { getSponsors } from '../api/providers/sponsor';
import { Dispatch } from 'redux';
import * as types from '../types/sponsors-list-types';
import { sponsorsListConstants } from '../constants/sponsors-list-constants';

const getSponsorsBegin = (): types.IActionSponsorsListBegin => {
    return {
        type: sponsorsListConstants.SPONSORS_LIST_BEGIN
    }
}

const getSponsorsSuccess = (sponsorsData: Array<any>): types.IActionSponsorsListlSuccess => {
    return {
        type: sponsorsListConstants.SPONSORS_LIST_SUCCESS,
        data: sponsorsData
    }
}

const getSponsorsError = (error: any): types.IActionSponsorsListError => {
    return {
        type: sponsorsListConstants.SPONSORS_LIST_ERROR,
        error: error
    }
}

export const getSponsorsAction = (search?: string) =>
    (dispatch: Dispatch) => {
        dispatch(getSponsorsBegin());
        getSponsors.getAllSponsors(search)
            .then(response => {
                dispatch(getSponsorsSuccess(response.data));
            })
            .catch((err) => {
                dispatch(getSponsorsError(err));
            });
    }

