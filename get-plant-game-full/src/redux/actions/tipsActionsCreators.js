import * as constants from "./../constants";


export const fetchAllTips = () => ({
    type: constants.API,
    payload: {
        method: "GET",
        url: "plants",
        success: (response) => (setAllTips(response))
    }
});


export const createTip = (data, onSuccess, onError) => ({
    type: constants.API,
    payload: {
        method: "POST",
        url: "plants",
        data,
        success: (response) => (addTip(response)),
        postProcessSuccess: onSuccess,
        postProcessError: onError
    }
});

const addTip = (plant) => ({
    type: constants.ADD_TIP,
    payload: plant
});


const setAllTips = (data) => ({
    type: constants.SET_ALL_TIPS,
    payload: data
});