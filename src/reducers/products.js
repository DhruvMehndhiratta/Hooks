import types from '../types';

const initialState={
    productsResults:{}
}

export default function (state=initialState,action){
    switch (action.type) {
        case types.GET_PRODUCTS_RESULTS:
            return {...state }
        case types.GET_PRODUCTS_RESULTS_SUCCESS:
            return {...state,productsResults:action.payload}
        case types.GET_PRODUCTS_RESULTS_FAILED:
            return {...state}
    
        default:
            return { state }
    }
}