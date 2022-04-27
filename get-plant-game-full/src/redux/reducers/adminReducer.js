import * as constants from "./../constants";

const defaultState = {
    firstname: null,
    lastname: null,
    adminID: null,
    token: null,
    isLoggedIn: false
};

const adminInfo = localStorage.getItem("ADMIN_INFO");
const INITIAL_STATE = adminInfo ? JSON.parse(adminInfo) : defaultState;

export default function adminReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case constants.SET_ADMIN_INFO:
            return{ ...action.payload };
        case constants.RESET_ADMIN_INFO:
            return { ...defaultState };
        default:
            return state;
    }
};