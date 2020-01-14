import { ADD_POPULAR_MOVIES } from 'constants/action-types';
import { SEARCH_MOVIES } from 'constants/action-types';
import { CLEAR_SEARCH } from 'constants/action-types';
import { SEARCH_VALUE } from 'constants/action-types';

export function addPopularMovies (payload) {
  return { type: ADD_POPULAR_MOVIES, payload };
};

export function searchMovies (payload) {
  return { type: SEARCH_MOVIES, payload };
};

export function clearSearch (payload) {
  return { type: CLEAR_SEARCH, payload };
};

export function updateSearchValue (payload) {
  return { type: SEARCH_VALUE, payload };
};
