import { createStore } from 'redux';
import reducer from './reducers/reducer';

const store = createStore(reducer, {homeState: [], clickedCheckboxes: [], basketState: [],});

export default store;