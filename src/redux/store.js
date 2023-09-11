import { createStore } from 'redux';

import rootReducer from "./root-Reducer.js";

const store = createStore(rootReducer);

export default store;