import types from '../types'
import {
    getAutocompleteResultsAPI
} from '../api/autocomplete';


export const getAutocompleteResults = (search) => {
    return async(dispatch) => {
        dispatch({
            type:types.GET_AUTOCOMPLETE_RESULTS
        })
        try{
            const res = await getAutocompleteResultsAPI(search);
            dispatch({
                type:types.GET_AUTOCOMPLETE_RESULTS_SUCCESS,
                payload:res.results
            })
        }
        catch(err){
            dispatch({
                type:types.GET_AUTOCOMPLETE_RESULTS_FAILED,
                payload:err
            })
        }
    }

}