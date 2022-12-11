import {LOG_IN, LOG_OUT} from "./actionTypes";
import * as authServices from "../services/authServices";

export const login = async (dispatch, user) => {
    const response = await authServices.login(user);
    const loggedInUser = {username: response.username, userId: response._id};
    dispatch({
                 type: LOG_IN,
                 user: loggedInUser
             })
};

export const logout = async (dispatch) => {
    await authServices.logout();
    dispatch({
                 type: LOG_OUT
             })
}

export const register = async (dispatch, user) => {
    const response = await authServices.register(user);
    const loggedInUser = {username: response.username, userId: response._id};
    dispatch({
                 type: LOG_IN,
                 user: loggedInUser
             })
}