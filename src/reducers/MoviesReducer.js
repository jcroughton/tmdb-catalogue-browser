import { ADD_POPULAR_MOVIES, SEARCH_MOVIES, CLEAR_SEARCH } from '../constants/action-types';

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

  if (action.type === CLEAR_SEARCH) {
    return Object.assign({}, state, {
      searchResults: ''
    });
  }

  return state;
};

export default moviesReducer;
