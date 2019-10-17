import { Action } from 'redux';
import { sponsorListConstants } from '../constants/sponsor-list-constants';

export interface IActionSponsorListBegin extends Action {
    type: sponsorListConstants.SPONSOR_LIST_BEGIN
}

export interface IActionSponsorListlSuccess extends Action {
    type: sponsorListConstants.SPONSOR_LIST_SUCCESS,
    data: Array<any>
}

export interface IActionSponsorListError extends Action {
    type: sponsorListConstants.SPONSOR_LIST_ERROR,
    error: any
}


export type sponsorListType = IActionSponsorListBegin | IActionSponsorListlSuccess | IActionSponsorListError ;