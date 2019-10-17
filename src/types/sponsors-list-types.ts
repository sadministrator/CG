import { Action } from 'redux';
import { sponsorsListConstants } from '../constants/sponsors-list-constants';

export interface IActionSponsorsListBegin extends Action {
    type: sponsorsListConstants.SPONSORS_LIST_BEGIN
}

export interface IActionSponsorsListlSuccess extends Action {
    type: sponsorsListConstants.SPONSORS_LIST_SUCCESS,
    data: Array<any>
}

export interface IActionSponsorsListError extends Action {
    type: sponsorsListConstants.SPONSORS_LIST_ERROR,
    error: any
}


export type sponsorsListType = IActionSponsorsListBegin | IActionSponsorsListlSuccess | IActionSponsorsListError ;