import types from '../types';
import { getSearchResultsAPI } from '../api/products';

export const getSearchResults = (query) => {
    return async (dispatch) => {
        dispatch({
            type:types.GET_PRODUCTS_RESULTS
        })
        try{
            const res = await getSearchResultsAPI(query);
            dispatch({
                type:types.GET_PRODUCTS_RESULTS_SUCCESS,
                payload:res.result
            })
        }
        catch(err){
            dispatch({
                type:types.GET_PRODUCTS_RESULTS_FAILED
            })
        }
    }
}