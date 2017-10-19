import 'isomorphic-fetch';
import {API_BASE_URL} from '../config';

export const fetchDog = () => dispatch => {
    dispatch(fetchDogRequest());
    return fetch(`${API_BASE_URL}/dog`).then(res => {
        if (!res.ok) {
            throw new Error(res.statusText);
        }
        return res.json();
    }).then(data =>
        dispatch(fetchDogSuccess(data)) //return cheese here
    ).catch(err =>
        dispatch(fetchDogError(err)) //otherwise return error here
    );
};

//Request to fetch a dog
export const FETCH_DOG_REQUEST = 'FETCH_DOG_REQUEST';

//action creator that is triggered by the action
//if the request is successfull
export const fetchDogRequest = () => ({
    type: FETCH_DOG_REQUEST
});

//Dog fetch request is successfull
export const FETCH_DOG_SUCCESS = 'FETCH_DOG_SUCCESS';
//action creator that is triggered by the action
//if the action is successful return a Dog
export const fetchDogSuccess = aDog => ({
    type: FETCH_DOG_SUCCESS,
    aDog
});

//Dog fetch request is NOT successfull, return error
export const FETCH_DOG_ERROR = 'FETCH_DOG_ERROR';
//action creator that is triggered by the action
//if no cheese return error
export const fetchDogError = error => ({
    type: FETCH_DOG_ERROR,
    error
});