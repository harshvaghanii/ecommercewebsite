import axios from "axios";
const signup_url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp";
const login_url =
    "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword";
const key = "AIzaSyA8enYP_u5ncneEztR4ABd_Z1BbqAIMBq4";

export const handleSignUp = (details, callback) => {
    return async (dispatch) => {
        try {
            const response = await axios.post(`${signup_url}?key=${key}`, {
                email: details.email,
                password: details.password,
                returnSecureToken: true,
            });
            dispatch({
                type: "SIGNUP",
                payload: {
                    localID: response.data.localId,
                    idToken: response.data.idToken,
                    ...response.data,
                },
            });
            localStorage.setItem("token", response.data.idToken);
            return callback(response.data);
        } catch (error) {
            return callback({
                error: true,
                response: error.response,
            });
        }
    };
};

export const handleLogIn = (details, callback) => {
    return async (dispatch) => {
        try {
            const response = await axios.post(`${login_url}?key=${key}`, {
                email: details.email,
                password: details.password,
                returnSecureToken: true,
            });
            console.log(response);
            dispatch({
                type: "LOGIN",
                payload: {
                    localID: response.data.localId,
                    idToken: response.data.idToken,
                    ...response.data,
                },
            });
            localStorage.setItem("token", response.data.idToken);
            return callback(response);
        } catch (error) {
            console.log(error);
            return callback({
                error: true,
                response: error.response,
            });
        }
    };
};

export const isLoggedIn = (callback) => {
    return async (dispatch) => {
        const token = localStorage.getItem("token");
        if (!token) return;
        try {
            const response = await axios.post(
                `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${key}`,
                {
                    idToken: token,
                }
            );
            dispatch({
                type: "LOGIN",
                payload: {
                    localID: response.data.users[0].localId,
                    idToken: token,
                    ...response.data,
                },
            });
            return callback(response);
        } catch (error) {
            console.log(error);
            return callback({
                error: true,
                response: error.response,
            });
        }
    };
};

export const logoutUser = () => {
    localStorage.removeItem("token");
    return (dispatch) => {
        dispatch({
            type: "LOGOUT",
        });
    };
};
