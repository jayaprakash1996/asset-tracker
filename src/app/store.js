import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer:{
        // all reducers will be placed here
        auth: authReducer,
    },
});