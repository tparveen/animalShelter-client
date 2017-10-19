import 'isomorphic-fetch';
import {API_BASE_URL} from '../config';

export const fetchCat = () => dispatch => {
    dispatch(fetchCatRequest());
    return fetch(`${API_BASE_URL}/cat`).then(res => {
        if (!res.ok) {
            throw new Error(res.statusText);
        }
        return res.json();
    }).then(data =>
        dispatch(fetchCatSuccess(data)) //return cheese here
    ).catch(err =>
        dispatch(fetchCatError(err)) //otherwise return error here
    );
};

//Request to fetch a cat
export const FETCH_CAT_REQUEST = 'FETCH_CAT_REQUEST';

//action creator that is triggered by the action
//if the request is successfull
export const fetchCatRequest = () => ({
    type: FETCH_CAT_REQUEST
});

//Cat fetch request is successfull
export const FETCH_CAT_SUCCESS = 'FETCH_CAT_SUCCESS';
//action creator that is triggered by the action
//if the action is successful return a cat
export const fetchCatSuccess = aCat => ({
    type: FETCH_CAT_SUCCESS,
    aCat
});

//Cat fetch request is NOT successfull, return error
export const FETCH_CAT_ERROR = 'FETCH_CAT_ERROR';
//action creator that is triggered by the action
//if no cheese return error
export const fetchCatError = error => ({
    type: FETCH_CAT_ERROR,
    error
});