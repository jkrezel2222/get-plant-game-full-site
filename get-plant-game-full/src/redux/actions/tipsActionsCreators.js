import * as constants from "./../constants";


export const fetchAllTips = () => ({
    type: constants.API,
    payload: {
        method: "GET",
        url: "plants",
        success: (response) => (setAllTips(response))
    }
});

const setAllTips = (data) => ({
    type: constants.SET_ALL_TIPS,
    payload: data
});