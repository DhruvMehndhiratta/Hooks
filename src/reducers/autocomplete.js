import types from "../types";

const initialState = {
  fetching: false,
  searchSuggestions:[]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_AUTOCOMPLETE_RESULTS:
      return { ...state, fetching: true };
    case types.GET_AUTOCOMPLETE_RESULTS_SUCCESS:
      return { ...state, fetching: false, searchSuggestions:action.payload };
    case types.GET_AUTOCOMPLETE_RESULTS_FAILED:
      return { ...state, fetching: false };
    default:
      return state;
  }
};
