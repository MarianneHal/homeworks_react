import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {carReducer} from "../slice/slice";


const rootReducer = combineReducers(
    {
        cars: carReducer
    }
);

const setupStore = () => configureStore({reducer: rootReducer});

export {setupStore};

