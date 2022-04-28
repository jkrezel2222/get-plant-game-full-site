import { combineReducers } from "@reduxjs/toolkit";
import admin from "./adminReducer";
import loading from "./loadingReducer";
import plants from "./tipsReducer";


const rootReducer = combineReducers({ admin, loading, plants });

export default rootReducer;