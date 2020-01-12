import { SEARCH_MOVIES } from 'constants/action-types';

const initialState = {
  searchResults: [],
};

function MoviesReducer(state = initialState, action) {
  if (action.type === SEARCH_MOVIES) {
    return Object.assign({}, state, {
      searchResults: action.payload
    });
  }

  return state;
};

export default MoviesReducer;
