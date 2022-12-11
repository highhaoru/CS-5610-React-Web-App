import {useEffect, useState} from "react";
import * as GameService from "../services/games-service";
import GameGallery from "../home/homeGallery";

const GameSection = ({findGamesFromServer={}}) => {
    const [games, setGames] = useState([]);
    const [page, setPage] = useState(1);
    const findGames = () => {
        findGamesFromServer(page)
            // TODO: slice is for simplicity, remove slice when you're working on this component
            .then((ms) => setGames(ms.slice(0, 4)))
            .catch(e => alert(e.response.data));
    }
    useEffect(findGames, [findGamesFromServer, page]);
    return (
        <GameGallery games={games}/>
    )
};
export default GameSection;