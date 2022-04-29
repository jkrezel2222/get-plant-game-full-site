import * as constants from "./../constants";

export default function tipsReducer(state = [], action) {
    switch(action.type) {
        case constants.SET_ALL_TIPS:
            return action.payload;
        case constants.ADD_TIP:
            return state.concat(action.payload);
        case constants.REMOVE_TIP:
            return state.filter(item => item.id !== action.payload);
        case constants.UPDATE_TIP:
            return state.map(item => {
                if(item.id === action.payload.plantID)
                    return { ...item, ...action.payload.data };
                else
                    return item;
            });
        case constants.RESET_ADMIN_INFO:
            return [];
        default:
            return state;
    }
}