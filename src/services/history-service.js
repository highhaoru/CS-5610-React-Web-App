import axios from 'axios';
const HISTORY_API = 'http://localhost:4000/history';

export const findAllHistory = async () => {
    const response = await axios.get(`${HISTORY_API}`);
    return response.data;
}

export const findHistoryById = async (uid) => {
    const response = await axios.get(`${HISTORY_API}/${uid}`);
    return response.data;
}

export const createHistory = async (history) => {
    const response = await axios.post(HISTORY_API, history)
    return response.data;
}

export const deleteHistory = async (hid) => {
    const response = await axios.delete(`${HISTORY_API}/${hid}`)
    return response.data
}
