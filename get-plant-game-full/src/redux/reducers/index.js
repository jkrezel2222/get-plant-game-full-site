import { combineReducers } from "@reduxjs/toolkit";
import admin from "./adminReducer";

const rootReducer = combineReducers({ admin });

export default rootReducer;