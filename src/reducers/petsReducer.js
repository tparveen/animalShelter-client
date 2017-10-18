import * as catActions from '../actions/catAction';
import * as dogActions from '../actions/dogAction';

const initialState = {
    cat: {},
    dog:{},
    loading: false,
    error: null
};

export default(state=initialState, action) => {
    //On fetchCheesesRequest The loading property of the state to be true. 
    if(action.type === catActions.FETCH_CAT_REQUEST) {
        return Object.assign({}, state, {
            loading: true
        });
    }
    //On fetchCheesesSuccess it should set:
    /*
    The loading property of the state to be false.
    The error property of the state to be null.
    The cheeses property of the state to be equal to the fetched list of cheeses.   
    */
    else if(action.type === catActions.FETCH_CAT_SUCCESS){
        return Object.assign({}, state, {
            cat: action.aCat,
            loading: false,
            error: null   
        });

    }

    /*
    On fetchCheesesError it should set:
    The loading property of the state to be false.
    The error property of the state to be equal to the error message received.

    */
    else if(action.type === catActions.FETCH_CAT_ERROR){
        return Object.assign({}, state, {
            loading: false,
            error: action.error   
        });

    }

    //*****************DOG PART************ */
    if(action.type === dogActions.FETCH_DOG_REQUEST) {
        return Object.assign({}, state, {
            loading: true
        });
    }
    //On fetchCheesesSuccess it should set:
    /*
    The loading property of the state to be false.
    The error property of the state to be null.
    The cheeses property of the state to be equal to the fetched list of cheeses.   
    */
    else if(action.type === dogActions.FETCH_DOG_SUCCESS){
        return Object.assign({}, state, {
            dog: action.aDog,
            loading: false,
            error: null   
        });

    }

    /*
    On fetchCheesesError it should set:
    The loading property of the state to be false.
    The error property of the state to be equal to the error message received.

    */
    else if(action.type === dogActions.FETCH_DOG_ERROR){
        return Object.assign({}, state, {
            loading: false,
            error: action.error   
        });

    }
    return state;
};