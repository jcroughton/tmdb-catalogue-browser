import { ADD_POPULAR_MOVIES, SEARCH_MOVIES } from '../constants/action-types';

const initialState = {
  popularMovies: [],
  searchResults: [],
};

function moviesReducer(state = initialState, action) {
  if (action.type === ADD_POPULAR_MOVIES) {
    return Object.assign({}, state, {
      popularMovies: action.payload
    });
  }

  if (action.type === SEARCH_MOVIES) {
    return Object.assign({}, state, {
      searchResults: action.payload
    });
  }

  return state;
};

export default moviesReducer;
