import { ADD_POPULAR_MOVIES } from 'constants/action-types';
import { SEARCH_MOVIES } from 'constants/action-types';

export function addPopularMovies (payload) {
  return { type: ADD_POPULAR_MOVIES, payload };
};

export function searchMovies (payload) {
  return { type: SEARCH_MOVIES, payload };
};
