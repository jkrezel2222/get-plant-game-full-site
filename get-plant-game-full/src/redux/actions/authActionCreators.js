import * as constants from "./../constants";

export const registerAdmin = (data, onSuccess, onError) => ({
    type: constants.API,
    payload: {
        method: "POST",
        url: "admins",
        data,
        success: (response) => (setAdminInfo(response)),
        postProcessSuccess: onSuccess,
        postProcessError: onError
    }
});

export const loginAdmin = (data, onSuccess, onError) => ({
    type: constants.API,
    payload: {
        method: "POST",
        url: "login",
        data,
        success: (response) => (setAdminInfo(response)),
        postProcessSuccess: onSuccess,
        postProcessError: onError
    }
})


export const logoutAdmin = () => {
    localStorage.removeItem("ADMIN_INFO");
    return { type: constants.RESET_ADMIN_INFO };
};



const setAdminInfo = (data) => {

    const adminInfo = {
        // fullname: `${data.firstname} ${data.lastname}`,
        firstname: data.firstname,
        lastname: data.lastname,
        adminId: data.id,
        token: data.jwt,
        isLoggedIn: true
    };
    localStorage.setItem("ADMIN_INFO", JSON.stringify(adminInfo));
    return { type: constants.SET_ADMIN_INFO, payload: adminInfo };
};