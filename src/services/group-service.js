import axios from 'axios';
const GROUP_API = 'http://localhost:4000/group';
const USER_API_URL = 'http://localhost:4000/users';
// const TUITS_API = 'https://tuiter-node-server-app.herokuapp.com/api/tuits';
// const API_BASE = process.env.REACT_APP_API_BASE;
// console.log(API_BASE);
// const GAMES_API = `${API_BASE}/reviews`;

export const joinGroup = async (toJoin) => {
    const uid = toJoin.uid;
    const gid = toJoin.gid;
    const game = toJoin.game;
    const response = await axios.post(`${GROUP_API}/${uid}/${gid}`, game)
    return response.data;
}
// export const createReview = async (review) => {
//     const response = await axios.post(GAMES_API, review)
//     return response.data;
// }
export const findJoined = async (uid) => {
    const response = await axios.get(`${GROUP_API}/${uid}`);
    return response.data;
}
export const checkJoined = async (toJoin) => {
    const uid = toJoin.uid;
    const gid = toJoin.gid;
    const response = await axios.get(`${GROUP_API}/${uid}/${gid}`)
    return response.data;
}
//
// export const deleteReview = async (rid) => {
//     const response = await axios.delete(`${GAMES_API}/${rid}`)
//     return response.data
// }
//
// export const updateTuit = async (tuit) => {
//     await axios.put(`${GAMES_API}/${tuit._id}`, tuit);
//     return tuit;
// }