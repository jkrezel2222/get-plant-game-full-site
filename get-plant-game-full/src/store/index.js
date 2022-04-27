import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer:{
        // plant: plantSlice.reducer
    }
});

export default store;