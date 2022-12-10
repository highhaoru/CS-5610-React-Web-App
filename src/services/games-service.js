import axios from 'axios';

const GAME_API = 'http://localhost:4000/api/games';

export const findGames = async () => {
    const response = await axios.get(GAME_API);
    const tuits = response.data;
    return tuits;
}
