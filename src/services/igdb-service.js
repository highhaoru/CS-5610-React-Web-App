import axios from "axios";

// const SEARCH_URL = 'https://api.igdb.com/v4/games';
const igdb_ID = '8mngw11qxzpdi1itn414e37rvcb2ql';
const access_token = 'Bearer repgfjbdo42amcp0oedsxishesij79';


// export const findGameBySearchTerm = async (term) => {
//     const response = await axios.post(`${SEARCH_URL}`,{
//         search: "Halo",
//         fields: "name"
//     }, {
//         headers: {
//             'Client-ID': `${igdb_ID}`,
//             'Authorization': `${access_token}`
//         }
//     })
//     return response.data
// }
const omdb_URL = 'https://omdbapi.com/?apikey=f9e76a55&type=game&s=';
const DETAILS_URL = 'https://omdbapi.com/?apikey=f9e76a55&type=game&Plot=full&i='

export const findGameBySearchTerm = async (term) => {
    const response = await axios.get(`${omdb_URL}${term}`)
    return response.data.Search
}
export const findGameByImdbId = async (imdbID) => {
    const response = await axios.get(`${DETAILS_URL}${imdbID}`)
    return response.data
}