import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL;
// const GAME_API = 'http://localhost:4000/api/games';
const GAME_API = `${BASE_URL}/api/games`

export const findGames = async () => {
    const response = await axios.get(GAME_API);
    const tuits = response.data;
    return tuits;
}

export const findPopularGames = (page) => {
    return axios.get(`${GAME_API}/popular/${page}`)
        .then(response => response.data.results);
}
export const findNowPlayingGames = (page) => {
    return axios.get(`${GAME_API}/now-playing/${page}`)
        .then(response => response.data.results);
}
export const findTopRatedGames = (page) => {
    return axios.get(`${GAME_API}/top-rated/${page}`)
        .then(response => response.data.results);
}
export const findUpcomingGames = (page) => {
    return axios.get(`${GAME_API}/upcoming/${page}`)
        .then(response => response.data.results);
}


// export const createGames = async (tuit) => {
//     const response = await axios.post(GAME_API, tuit);
//     const tuits = response.data;
//     return tuits;
// }
//
// export const deleteGames = async (tid) => {
//     const response = await axios.delete(`${GAME_API}/${tid}`);
//     const tuits = response.data;
//     return tuits;
// }
//
// export const updateGames = async (tuit) => {
//     await axios.put(`${GAME_API}/${tuit._id}`,tuit);
//     return tuit;
// }