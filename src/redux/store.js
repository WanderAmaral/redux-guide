import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import rootReducer from "./root-Reducer.js";

const store = configureStore({
    reducer: rootReducer,
    middleware: [logger]
})

export default store;