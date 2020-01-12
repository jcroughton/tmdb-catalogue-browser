import { SEARCH_MOVIES } from 'constants/action-types';

export function searchMovies (payload) {
  return { type: SEARCH_MOVIES, payload };
};
