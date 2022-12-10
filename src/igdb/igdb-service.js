import axios from "axios";

const SEARCH_URL = 'https://api.igdb.com/v4/games';
const igdb_ID = '8mngw11qxzpdi1itn414e37rvcb2ql';
const access_token = 'repgfjbdo42amcp0oedsxishesij79';
const token_type= "Bearer";

export const findGameBySearchTerm = async (term) => {
    const response = await axios.post(`${SEARCH_URL}`,{
        search: "Halo",
        fields: "name"
    }, {
        headers: {
            'Client-ID': `${igdb_ID}`,
            'Authorization': `${token_type} ${access_token}`
        }
    })
    return response.data
}