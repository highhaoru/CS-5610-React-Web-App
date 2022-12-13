import axios from 'axios';
const REVIEWS_API = 'http://localhost:4000/api/reviews';
// const TUITS_API = 'https://tuiter-node-server-app.herokuapp.com/api/tuits';
// const API_BASE = process.env.REACT_APP_API_BASE;
// console.log(API_BASE);
// const GAMES_API = `${API_BASE}/reviews`;

export const createReview = async (review) => {
    const response = await axios.post(REVIEWS_API, review)
    return response.data;
}

export const findReviews = async (gid) => {
    const response = await axios.get(`${REVIEWS_API}/${gid}`);
    return response.data;
}
export const findRecentReviews = async () => {
    const response = await axios.get(`${REVIEWS_API}`);
    return response.data;
}
export const deleteReview = async (rid) => {
    const response = await axios.delete(`${REVIEWS_API}/${rid}`)
    return response.data
}
//
// export const updateTuit = async (tuit) => {
//     await axios.put(`${GAMES_API}/${tuit._id}`, tuit);
//     return tuit;
// }