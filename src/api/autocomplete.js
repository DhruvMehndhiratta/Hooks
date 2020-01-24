import { apiGet } from '../utils';
import { account_id, feed, sig } from '../constants';

export function getAutocompleteResultsAPI(query){
    return apiGet(`/search/autocomplete?query=${query}&account_id=${account_id}&feed=${feed}&sig=${sig}`)
}