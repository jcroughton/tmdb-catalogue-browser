import { createStore } from 'redux';
import { MoviesReducer }  from 'reducers/index';

const appStore = createStore(MoviesReducer);

export default appStore;
