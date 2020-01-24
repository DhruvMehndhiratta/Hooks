import { apiGet } from '../utils';
import { account_id, feed, sig } from '../constants';

export function getSearchResultsAPI(query,filters={}){
    return apiGet(`/search/items?query=${query}&searchType=suggestionSearch&filters={}&from=0&size=30&account_id=${account_id}&feed=${feed}&sig=${sig}`)
}