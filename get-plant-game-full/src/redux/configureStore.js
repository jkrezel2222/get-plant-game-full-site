import { createStore, applyMiddleware, compose } from "@reduxjs/toolkit";
import rootReducer from "./reducers";
import { apiMiddleware } from "./apiMiddleware";

export default function configureStore(initialState) {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    return createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(apiMiddleware)));
};