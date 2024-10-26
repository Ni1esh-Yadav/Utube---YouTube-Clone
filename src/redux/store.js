import { configureStore } from "@reduxjs/toolkit";
import youtubeReducer from './slice'

export const store = configureStore({
    reducer: {
        youtube: youtubeReducer
    },
})