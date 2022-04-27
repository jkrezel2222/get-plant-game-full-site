import { combineReducers } from "@reduxjs/toolkit";
import admin from "./adminReducer";
import loading from "./loadingReducer";


const rootReducer = combineReducers({ admin, loading });

export default rootReducer;