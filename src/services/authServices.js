import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const AUTH_URL = `${BASE_URL}/api/auth`

const api = axios.create({
         withCredentials: true
     });

export const login = (userCredential) => {
    return api.post(`${AUTH_URL}/login`, userCredential)
        .then(response => response.data);
}
export const logout = () => {
    return api.post(`${AUTH_URL}/logout`)
        .then(response => response.data);
}
export const register = (userCredential) => {
    return api.post(`${AUTH_URL}/register`, userCredential)
        .then(response => response.data);
}
export const profile = () => {
    return api.post(`${AUTH_URL}/profile`)
        .then(response => response.data);
}