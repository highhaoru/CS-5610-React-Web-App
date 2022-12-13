import axios from 'axios';
const GAMES_API = 'http://localhost:4000/api/group';
// const TUITS_API = 'https://tuiter-node-server-app.herokuapp.com/api/tuits';
// const API_BASE = process.env.REACT_APP_API_BASE;
// console.log(API_BASE);
// const GAMES_API = `${API_BASE}/reviews`;

export const joinGroup = async ({user, gid}) => {
    const response = await axios.post(`${GAMES_API}/${gid}`, user)
    return response.data;
}
// export const createReview = async (review) => {
//     const response = await axios.post(GAMES_API, review)
//     return response.data;
// }
// export const findReviews = async (gid) => {
//     const response = await axios.get(`${GAMES_API}/${gid}`);
//     return response.data;
// }
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